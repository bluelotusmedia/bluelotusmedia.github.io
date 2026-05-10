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
  // In a real GH Action, we can use git diff
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
      Task: Review the following AI-generated blog post for quality and SEO.
      File: ${file}
      
      Content:
      ${content}
      
      Standards:
      1. High quality writing, no fluff.
      2. Clear H1, H2, H3 hierarchy.
      3. Proper SEO frontmatter (title, description, tags).
      4. Value-driven content for the reader.
      
      Output your review in this exact format:
      VERDICT: [APPROVE, REQUEST_CHANGES, DENY]
      REASONING: [Explain why]
      
      If the verdict is APPROVE, your response must contain the word "APPROVE" prominently.
    `;

    try {
      // Calling Gemini CLI
      const result = execSync(`echo "${prompt.replace(/"/g, '\\"')}" | gemini --approval-mode yolo`).toString();
      console.log("AI Review Result:", result);
      
      // In a real GitHub Action, we would use the result to comment on the PR
      // and potentially approve/reject using the GH CLI.
      if (result.includes('VERDICT: APPROVE')) {
        console.log("AI Approved the post.");
        // execSync(`gh pr review ${prNumber} --approve --body "AI Review: Post meets high quality standards."`);
      } else if (result.includes('VERDICT: REQUEST_CHANGES')) {
        console.log("AI Requested changes.");
        // execSync(`gh pr review ${prNumber} --comment --body "AI Review: Changes requested for quality improvement."`);
      }
    } catch (error) {
      console.error("Error during AI review:", error.message);
    }
  }
}

reviewPR();
