const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const categories = [
  'Web Development (Next.js, React, Performance, Modern Frameworks)',
  'Artificial Intelligence (Agentic Workflows, LLMs, Automation, Gemini)',
  'Music Production (DSP, Mixing, Spatial Audio, Sound Design)',
  'Graphic Design & Branding (Visual Identity, Design Systems, Typography)',
  'Video Editing & Cinematic Narrative (Color Grading, Motion Graphics, Visual Storytelling)',
  'Digital Marketing & SEO (Conversion Optimization, Content Strategy, Analytics)'
];

async function generatePost() {
  const category = categories[Math.floor(Math.random() * categories.length)];
  const date = new Date().toISOString().split('T')[0];

  console.log(`Identifying a trending topic for category: ${category}`);

  // Step 1: Generate a trending, high-authority topic
  const topicPrompt = `
    You are a trend analyst for Blue Lotus Media. 
    Based on the category: "${category}", identify a highly trending, sophisticated, and expert-level blog post topic for the current year (2026).
    The topic should be visionary, specific, and appeal to high-end clients and technical professionals.
    
    Return ONLY the topic title. No preamble.
  `;

  let topic;
  try {
    topic = execSync(`echo "${topicPrompt.replace(/"/g, '\\"')}" | gemini --approval-mode yolo`).toString().trim();
    // Clean up potential markdown formatting from the title
    topic = topic.replace(/^#\s*/, '').replace(/\*/g, '').replace(/^Title:\s*/i, '').trim();
  } catch (error) {
    console.error("Error generating topic:", error.message);
    process.exit(1);
  }

  const slug = topic.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  const fileName = `${date}-${slug}.md`;
  const filePath = path.join(process.cwd(), 'content/blog', fileName);

  console.log(`Generating post for topic: ${topic}`);

  // Determine dynamic keywords based on category
  let dynamicKeywords = 'Digital Innovation, Web Development, Creative Strategy';
  if (category.includes('Music')) {
    dynamicKeywords = 'Music Production, Audio Engineering, DSP, Sound Design';
  } else if (category.includes('Graphic') || category.includes('Video')) {
    dynamicKeywords = 'Visual Identity, Motion Graphics, UX Design, Creative Branding';
  } else if (category.includes('Intelligence')) {
    dynamicKeywords = 'AI Innovation, Machine Learning, Agentic Systems, Future Tech';
  }

  const prompt = `
    Write a comprehensive, expert-level, and SEO-optimized blog post for "Blue Lotus Media" about: "${topic}".
    
    Target Keywords: ${topic.split(' ').join(', ')}, ${dynamicKeywords}.
    
    The post should be in Markdown format with the following frontmatter:
    ---
    title: "A compelling, high-authority title including key search terms"
    description: "A 150-160 character meta description that drives clicks"
    date: "${date}"
    tags: ["at", "least", "five", "highly", "relevant", "tags"]
    status: "published"
    readingTime: "Calculated based on 200 wpm"
    image: "https://images.unsplash.com/photo-XXX?w=1200&h=630&fit=crop (Replace XXX with a real, high-quality Unsplash ID related to: ${topic})"
    ---
    
    Content Requirements:
    1. Introduction: Hook the reader with a strong narrative. Define the current landscape and why this topic is critical right now.
    2. Executive Summary: A brief 2-3 sentence overview for busy professionals.
    3. Deep Dive Analysis: Provide high-level technical insights. Break down complex concepts into understandable but sophisticated sections.
    4. Trends & Data: Discuss current market trends, emerging technologies, and data-driven predictions for 2026 and beyond.
    5. Practical Application & Case Studies: Give the reader actionable "how-to" advice. Include hypothetical or real-world examples of how Blue Lotus Media would implement these solutions.
    6. Future Outlook: How will this evolve? What should businesses be preparing for?
    7. Conclusion: Summarize the key takeaways and provide a strong call to action.
    
    Formatting & SEO:
    - Use a clear hierarchy of H1, H2, and H3 tags.
    - Use bullet points, numbered lists, and Markdown tables to present complex data.
    - Bold important terms and concepts for readability.
    - Integrate keywords naturally (no stuffing).
    
    Tone & Quality:
    - Target 1500-2000+ words.
    - Tone: Visionary, professional, authoritative, and innovative.
    - Avoid "AI-isms" or generic filler text. Focus on unique insights and high-value technical depth.
    
    IMPORTANT: Return ONLY the markdown content. Do not include any preamble or conversational text.
  `;

  try {
    console.log("Calling Gemini CLI...");
    
    // Using the CLI as requested
    const result = execSync(`echo "${prompt.replace(/"/g, '\\"')}" | gemini --approval-mode yolo`).toString();
    
    // Clean up response
    const cleanedText = result.replace(/^```markdown\n/, '').replace(/\n```$/, '').trim();

    // Ensure the content directory exists
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(filePath, cleanedText);
    console.log(`Successfully generated: ${fileName}`);
  } catch (error) {
    console.error("Error generating post:", error.message);
    process.exit(1);
  }
}

generatePost();
