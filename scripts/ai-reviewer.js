const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

async function reviewPR() {
  const prNumber = process.env.PR_NUMBER;
  if (!prNumber) {
    console.log("No PR number found, skipping review.");
    return;
  }

  // Find changed files in the PR
  const changedFiles = execSync(`git diff --name-only origin/main`).toString().split('\n');
  const blogFiles = changedFiles.filter(f => f.startsWith('content/blog/') && f.endsWith('.md'));

  if (blogFiles.length === 0) {
    console.log("No blog files changed.");
    return;
  }

  for (const file of blogFiles) {
    if (!fs.existsSync(file)) continue;
    
    console.log(`Reviewing ${file}...`);
    const content = fs.readFileSync(file, 'utf8');
    
    const prompt = `
      Task: Perform a critical, expert-level review of the following technical blog post.
      File: ${file}
      
      Review Standards:
      1. Technical Depth: Does it provide genuine insight or is it surface-level? It must be sophisticated.
      2. Length: Is it at least 1500 words? (Reject if it's significantly shorter than the target).
      3. Formatting: Does it use a clear H1/H2/H3 hierarchy, bullet points, and tables where appropriate?
      4. Honesty & Integrity: Does the post invent fictional case studies, clients, or past projects for Blue Lotus Media? (Reject or request changes immediately if false claims are made).
      5. Accuracy: Does the information reflect current (2025/2026) tech trends and accurate concepts?
      
      Content to Review:
      ${content}
      
      Output your review in this exact format:
      VERDICT: [APPROVE, REQUEST_CHANGES, DENY]
      REASONING: [Provide a detailed critique based on the 5 standards above]
      
      IMPORTANT: Only APPROVE if the post is truly exceptional, detailed, and accurate.
    `;

    try {
      // Calling Gemini CLI
      const result = execSync(`echo "${prompt.replace(/"/g, '\\"')}" | gemini --approval-mode yolo`).toString();
      console.log("AI Review Result:", result);
      
      if (result.includes('VERDICT: APPROVE')) {
        console.log("AI Approved the post. Merging...");
        execSync(`gh pr review ${prNumber} --approve --body "AI Review: Post meets high quality standards."`);
        execSync(`gh pr merge ${prNumber} --merge`);
      } else if (result.includes('VERDICT: REQUEST_CHANGES')) {
        console.log("AI Requested changes.");
        execSync(`gh pr review ${prNumber} --comment --body "AI Review: Changes requested for quality improvement."`);
      }
    } catch (error) {
      console.error("Error during AI review:", error.message);
    }
  }
}

reviewPR();
