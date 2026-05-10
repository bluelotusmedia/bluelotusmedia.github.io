const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const topics = [
  'Latest trends in Generative AI and LLMs',
  'The future of Web Development with AI Agents',
  'Advanced Video Editing techniques in the AI era',
  'Graphics and Design: How AI is changing the creative process',
  'Web Performance optimization for modern frameworks',
  'The impact of AI on SEO and Content Marketing',
  'Emerging tech trends for 2026',
  'Building autonomous systems with Gemini'
];

async function generatePost() {
  const topic = topics[Math.floor(Math.random() * topics.length)];
  const date = new Date().toISOString().split('T')[0];
  const slug = topic.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  const fileName = `${date}-${slug}.md`;
  const filePath = path.join(process.cwd(), 'content/blog', fileName);

  console.log(`Generating post for topic: ${topic}`);

  const prompt = `
    Write a high-quality, long-form, SEO-optimized blog post for "Blue Lotus Media" about: "${topic}".
    
    Target Keywords: ${topic.split(' ').join(', ')}, Digital Innovation, Web Development, AI Trends.
    
    The post should be in Markdown format with the following frontmatter:
    ---
    title: "A compelling, SEO-friendly title that includes keywords"
    description: "A 150-160 character meta description for SEO optimization"
    date: "${date}"
    tags: ["at", "least", "five", "relevant", "tags"]
    status: "published"
    readingTime: "Estimate based on word count"
    image: "https://images.unsplash.com/photo-XXX (Find a relevant Unsplash ID for ${topic})"
    ---
    
    Content Requirements:
    1. Introduction: Hook the reader and explain the relevance of the topic today.
    2. Deep Dive: Provide technical insights, current trends, and future predictions.
    3. Practical Advice: Give the reader actionable takeaways.
    4. Conclusion: Summarize and provide a strong closing statement.
    5. SEO: Use semantic HTML (H1, H2, H3), bold key terms, and naturally integrate keywords.
    6. Quality: Aim for 1000+ words. Avoid generic AI fluff. Use a professional yet creative tone.
    
    Output the markdown directly into the file "content/blog/${fileName}".
  `;

  // We'll use the gemini command. 
  // Since it's an interactive agent, we'll try to pipe the prompt.
  // Note: In a real GitHub Action, we'd need the gemini CLI installed.
  try {
    // For the purpose of this demonstration, we'll simulate the call 
    // or use a method that works with the user's environment.
    console.log("Calling Gemini CLI...");
    
    // Attempting to run gemini in a non-interactive way if possible
    // or just using a fallback for now.
    const output = execSync(`echo "${prompt.replace(/"/g, '\\"')}" | gemini --approval-mode yolo`).toString();
    
    // The gemini agent might create the file itself if we tell it to, 
    // but here we expect it to output text.
    // However, the gemini agent usually writes files directly if instructed.
    
    console.log("Gemini finished processing.");
  } catch (error) {
    console.error("Error calling Gemini CLI:", error.message);
    
    // Fallback for demo purposes if gemini fails in this environment
    if (process.env.CI) {
       throw error;
    }
  }
}

generatePost();
