const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const categories = [
  'Web Development (Next.js, React, Performance, Modern Frameworks, Core Web Vitals)',
  'Artificial Intelligence (Agentic Workflows, LLMs, Automation, Gemini, Prompt Engineering)',
  'Music Production (DSP, Mixing, Spatial Audio, Sound Design, Dolby Atmos)',
  'Graphic Design & Branding (Visual Identity, Design Systems, Typography, UI/UX)',
  'Video Editing & Cinematic Narrative (Color Grading, Motion Graphics, Visual Storytelling)',
  'Digital Marketing & SEO (Conversion Optimization, Content Strategy, Analytics, Semantic Search)'
];

async function generatePost() {
  // Get used image IDs to avoid duplication
  const blogDir = path.join(process.cwd(), 'content/blog');
  const usedIds = [];
  if (fs.existsSync(blogDir)) {
    const blogFiles = fs.readdirSync(blogDir).filter(f => f.endsWith('.md'));
    blogFiles.forEach(file => {
      const content = fs.readFileSync(path.join(blogDir, file), 'utf8');
      // Improved regex to catch all Unsplash photo IDs in the file
      const matches = content.matchAll(/photo-([a-zA-Z0-9-]+)/g);
      for (const match of matches) {
        usedIds.push(match[1]);
      }
    });
  }

  const category = categories[Math.floor(Math.random() * categories.length)];
  const date = new Date().toISOString().split('T')[0];

  console.log(`Identifying a trending topic for category: ${category}`);

  // Step 1: Generate a trending, high-authority topic with high search intent
  const topicPrompt = `
    Act as a Master SEO Strategist and Trend Analyst for Blue Lotus Media. 
    Based on the category: "${category}", identify ONE highly trending, long-tail keyword topic for the current year (2026).
    The topic must have high search volume potential, answer a specific technical query, and appeal to high-end clients and technical professionals.
    
    Return ONLY the topic title. No preamble. No quotes.
  `;

  let topic;
  try {
    topic = execSync(`echo "${topicPrompt.replace(/"/g, '\\"')}" | gemini --approval-mode yolo`, { 
      stdio: 'pipe'
    }).toString().trim();
    
    // Clean up potential markdown formatting from the title
    topic = topic.replace(/^#\s*/, '').replace(/\*/g, '').replace(/^Title:\s*/i, '').replace(/^"|"$/g, '').trim();
  } catch (error) {
    console.error("Error generating topic.");
    if (error.stdout) console.error("STDOUT:", error.stdout.toString());
    if (error.stderr) console.error("STDERR:", error.stderr.toString());
    process.exit(1);
  }

  const slug = topic.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  const fileName = `${date}-${slug}.md`;
  const filePath = path.join(process.cwd(), 'content/blog', fileName);

  console.log(`Generating post for topic: ${topic}`);

  // Determine dynamic LSI keywords based on category
  let dynamicKeywords = 'Digital Innovation, Web Development, Creative Strategy, Technical Solutions, ROI';
  if (category.includes('Music')) {
    dynamicKeywords = 'Music Production, Audio Engineering, DSP, Sound Design, Immersive Audio, Mastering';
  } else if (category.includes('Graphic') || category.includes('Video')) {
    dynamicKeywords = 'Visual Identity, Motion Graphics, UX Design, Creative Branding, User Retention, Visual Aesthetics';
  } else if (category.includes('Intelligence')) {
    dynamicKeywords = 'AI Innovation, Machine Learning, Agentic Systems, Future Tech, Automation ROI, LLM Integration';
  } else if (category.includes('Marketing')) {
    dynamicKeywords = 'Organic Traffic, Conversion Rate Optimization, Semantic SEO, EEAT, Digital Authority';
  }

  const prompt = `
    Act as an elite Technical Content Writer and SEO Expert. Write a comprehensive, expert-level blog post for "Blue Lotus Media" about: "${topic}".
    
    Primary Keyword Strategy: Target long-tail search intent for "${topic}".
    LSI Keywords to naturally weave in: ${dynamicKeywords}.
    
    The post MUST be in Markdown format with the following frontmatter:
    ---
    title: "A compelling, CTR-optimized title (under 60 characters) containing the main keyword"
    description: "A 150-160 character meta description that drives clicks and includes the primary keyword"
    date: "${date}"
    tags: ["at", "least", "five", "highly", "relevant", "seo", "tags"]
    status: "published"
    readingTime: "Calculated based on 200 wpm"
    image: "https://images.unsplash.com/photo-XXX?w=1200&h=630&fit=crop (Replace XXX with a real, high-quality, long-form NUMERICAL Unsplash ID related to: ${topic})"
    ---
    
    Content & SEO Requirements:
    1. Introduction (The Hook): Hook the reader. Clearly state the problem and the solution. Define the current landscape and why this topic is critical right now.
    2. Featured Snippet Target: Include a brief, objective 2-3 sentence paragraph early on that directly answers "What is [Topic]?" or "How does [Topic] work?" to win Google Featured Snippets.
    3. Deep Dive Analysis: Provide high-level technical insights. Break down complex concepts into understandable but sophisticated sections. Use H2 and H3 tags logically for semantic structure.
    4. Market Trends & Data (EEAT): Discuss current market trends, emerging technologies, and data-driven predictions for 2026 to build Experience, Expertise, Authoritativeness, and Trustworthiness.
    5. Actionable Strategies & Case Studies: Give the reader actionable "how-to" advice. Include real-world or hypothetical examples of how Blue Lotus Media would implement these solutions to achieve ROI.
    6. "People Also Ask" Section (FAQ): Include an FAQ section at the end targeting 3 common search queries related to the topic.
    7. Conclusion & CTA: Summarize key takeaways and provide a strong call to action to contact Blue Lotus Media for expert implementation.
    
    Formatting Rules:
    - Use a clear hierarchy of H2 and H3 tags (do not use H1 in the body, the title is the H1).
    - Use bullet points, numbered lists, and Markdown tables to present complex data and improve scannability.
    - Bold important terms, metrics, and concepts for readability and SEO emphasis.
    
    Tone & Quality:
    - Target 1500-2000+ words.
    - Tone: Visionary, professional, authoritative, and innovative. 
    - AVOID "AI-isms" (e.g., "In conclusion," "In today's fast-paced digital world," "Delve into"). Focus on unique insights and high-value technical depth.
    
    IMAGE RESTRICTION: You MUST provide a fresh, real, high-quality, long-form NUMERICAL Unsplash ID (like 1485827404703-89b55fcc595e). Do NOT use any of these previously used IDs: ${usedIds.join(', ')}. Ensure the image is visually stunning and directly related to: ${topic}.
    
    IMPORTANT: Return ONLY the markdown content, including the frontmatter. Do not include any preamble, conversational text, or wrapper markdown code blocks if possible.
  `;

  try {
    console.log("Calling Gemini CLI for content generation...");
    
    // Using the CLI as requested
    const result = execSync(`echo "${prompt.replace(/"/g, '\\"')}" | gemini --approval-mode yolo`, {
      stdio: 'pipe',
      maxBuffer: 1024 * 1024 * 10 // Allow up to 10MB of output for long articles
    }).toString();
    
    // Clean up response: remove potential markdown code block wrappers
    let cleanedText = result.trim();
    if (cleanedText.startsWith('\`\`\`markdown')) {
      cleanedText = cleanedText.substring(13);
    } else if (cleanedText.startsWith('\`\`\`')) {
      cleanedText = cleanedText.substring(3);
    }
    if (cleanedText.endsWith('\`\`\`')) {
      cleanedText = cleanedText.substring(0, cleanedText.length - 3);
    }
    cleanedText = cleanedText.trim();

    // Ensure the content directory exists
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(filePath, cleanedText);
    console.log(`Successfully generated: ${fileName}`);
  } catch (error) {
    console.error("Error generating post.");
    if (error.stdout) console.error("STDOUT:", error.stdout.toString());
    if (error.stderr) console.error("STDERR:", error.stderr.toString());
    process.exit(1);
  }
}

generatePost();
