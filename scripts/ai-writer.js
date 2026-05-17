const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function extractMarkdown(text) {
  let content = text.trim();
  const mdBlockRegex = /```markdown\s*([\s\S]*?)\s*```/i;
  const genericBlockRegex = /```\s*([\s\S]*?)\s*```/;
  
  let match = content.match(mdBlockRegex);
  if (match) {
    return match[1].trim();
  }
  
  match = content.match(genericBlockRegex);
  if (match) {
    return match[1].trim();
  }
  
  if (content.startsWith('```markdown')) content = content.substring(11);
  else if (content.startsWith('```')) content = content.substring(3);
  if (content.endsWith('```')) content = content.substring(0, content.length - 3);
  
  return content.trim();
}


const categories = [
  'Web Development (Next.js, React, Performance, Modern Frameworks, Core Web Vitals)',
  'Artificial Intelligence (Agentic Workflows, LLMs, Automation, Gemini, Prompt Engineering)',
  'Music Production (DSP, Mixing, Spatial Audio, Sound Design, Dolby Atmos)',
  'Graphic Design & Branding (Visual Identity, Design Systems, Typography, UI/UX)',
  'Video Editing & Cinematic Narrative (Color Grading, Motion Graphics, Visual Storytelling)',
  'Digital Marketing & SEO (Conversion Optimization, Content Strategy, Analytics, Semantic Search)'
];

// Curated pool of verified technical Unsplash IDs to guarantee high-quality, working images
const imagePool = {
  'Artificial Intelligence': [
    '1697577418970-95d99b5a55cf', // AI Chip 3D
    '1773332585861-72cf1558a6fc', // Copilot/Tech lifestyle
    '1485827404703-89b55fcc595e', // Robot/AI
    '1674027444485-cec3da58eef4', // Neural plexus
    '1620712943543-bcc4688e7485'  // AI Brain
  ],
  'Web Development': [
    '1550751827-4bd374c3f58b', // Data security visualization
    '1518770660439-4636190af475', // Circuit board
    '1555066931-4365d14bab8c', // Code screen
    '1498050108023-c5249f4df085'  // Code typing
  ],
  'Graphic Design & Branding': [
    '1533750357371-d70bb4d3805f', // Marketing icons/Design
    '1558655146-d09347e92766', // Design process
    '1635070041000-23097c9e7320'  // VR/3D Design
  ],
  'Video Editing & Cinematic Narrative': [
    '1574717024653-61fd2cf4d44d', // Video editing software
    '1485846234645-a62644f84728'  // Movie clapperboard
  ],
  'Digital Marketing & SEO': [
    '1460925895917-afdab827c52f', // Marketing analytics
    '1432888498266-38ffec3eaf0a', // Workspace/Marketing
    '1644088379091-d574269d422f', // Knowledge graph/Plexus
    '1551288049-bebda4e38f71'  // Data charts
  ],
  'Music Production': [
    '1509310202330-aec5af561c6b', // Music studio
    '1598488035139-bdbb2231ce04'  // Audio mixer
  ]
};

async function generatePost() {
  // Get used image IDs to avoid duplication
  const blogDir = path.join(process.cwd(), 'content/blog');
  const usedIds = [];
  const usedTopics = [];
  if (fs.existsSync(blogDir)) {
    const blogFiles = fs.readdirSync(blogDir).filter(f => f.endsWith('.md'));
    blogFiles.forEach(file => {
      const content = fs.readFileSync(path.join(blogDir, file), 'utf8');
      
      // Collect used image IDs
      const matches = content.matchAll(/photo-([a-zA-Z0-9-]+)/g);
      for (const match of matches) {
        usedIds.push(match[1]);
      }

      // Collect existing titles to prevent duplicate topics
      const titleMatch = content.match(/title:\s*"([^"]+)"/);
      if (titleMatch) {
        usedTopics.push(titleMatch[1]);
      }
    });
  }

  const category = categories[Math.floor(Math.random() * categories.length)];
  
  // Select a unique image from the pool for this category
  const allImagesFlat = Object.values(imagePool).flat();
  let imageId = allImagesFlat[Math.floor(Math.random() * allImagesFlat.length)]; // Dynamic random fallback
  const categoryKey = Object.keys(imagePool).find(k => category.startsWith(k.split(' ')[0]));
  if (categoryKey) {
    const availableImages = imagePool[categoryKey].filter(id => !usedIds.includes(id));
    if (availableImages.length > 0) {
      imageId = availableImages[Math.floor(Math.random() * availableImages.length)];
    } else {
      // Fallback to any unused image from the entire pool
      const backupImages = allImagesFlat.filter(id => !usedIds.includes(id));
      if (backupImages.length > 0) {
        imageId = backupImages[Math.floor(Math.random() * backupImages.length)];
      }
    }
  }

  const date = new Date().toISOString().split('T')[0];

  console.log(`Identifying a trending topic for category: ${category}`);

  // Step 1: Generate a trending, high-authority topic with high search intent
  const topicPrompt = `
    Act as a Master SEO Strategist and Trend Analyst for Blue Lotus Media. 
    Based on the category: "${category}", identify ONE highly trending, long-tail keyword topic for the current year (2026).
    The topic must have high search volume potential, answer a specific technical query, and appeal to high-end clients and technical professionals.
    
    IMPORTANT: Do NOT suggest a topic that is similar to any of these previously covered topics:
    ${usedTopics.join('\n- ')}
    
    Return ONLY the topic title. No preamble. No quotes.
  `;

  let topic;
  try {
    topic = execSync('gemini --approval-mode yolo', { 
      input: topicPrompt,
      maxBuffer: 1024 * 1024 * 10
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
    image: "https://images.unsplash.com/photo-${imageId}?w=1200&h=630&fit=crop"
    ---
    
    Content & SEO Requirements:
    1. Introduction (The Hook): Hook the reader. Clearly state the problem and the solution. Define the current landscape and why this topic is critical right now.
    2. Featured Snippet Target: Include a brief, objective 2-3 sentence paragraph early on that directly answers "What is [Topic]?" or "How does [Topic] work?" to win Google Featured Snippets.
    3. Deep Dive Analysis: Provide high-level technical insights. Break down complex concepts into understandable but sophisticated sections. Use H2 and H3 tags logically for semantic structure.
    4. Market Trends & Data (EEAT): Discuss current market trends, emerging technologies, and data-driven predictions for 2026 to build Experience, Expertise, Authoritativeness, and Trustworthiness.
    5. Actionable Strategies & Educational Examples: Give the reader actionable "how-to" advice and theoretical industry examples. DO NOT invent fictional case studies, clients, or past projects for Blue Lotus Media or Jacob Louis. Keep the tone purely educational, objective, and entertaining without making false claims.
    6. "People Also Ask" Section (FAQ): Include an FAQ section at the end targeting 3 common search queries related to the topic.
    7. Conclusion & CTA: Summarize key takeaways and provide a strong call to action to contact Blue Lotus Media for expert guidance.
    
    Formatting Rules:
    - Use a clear hierarchy of H2 and H3 tags (do not use H1 in the body, the title is the H1).
    - Use bullet points, numbered lists, and Markdown tables to present complex data and improve scannability.
    - Bold important terms, metrics, and concepts for readability and SEO emphasis.
    
    Tone & Quality:
    - Target 1500-2000+ words.
    - Tone: Visionary, professional, authoritative, and innovative. 
    - AVOID "AI-isms" (e.g., "In conclusion," "In today's fast-paced digital world," "Delve into"). Focus on unique insights and high-value technical depth.
    
    IMAGE RESTRICTION: Do NOT suggest an image ID. Use the one provided in the template.
    
    IMPORTANT: Return ONLY the markdown content, including the frontmatter. Do not include any preamble, conversational text, or wrapper markdown code blocks if possible.
  `;

  try {
    console.log("Calling Gemini CLI for content generation...");
    
    // Generate the initial draft
    const draftResult = execSync('gemini --approval-mode yolo', {
      input: prompt,
      maxBuffer: 1024 * 1024 * 10 // Allow up to 10MB of output for long articles
    }).toString();
    
    let draft = extractMarkdown(draftResult);

    console.log("Submitting draft for Autonomous Quality Control (QA)...");

    const reviewPrompt = `
      Act as a Senior Editor and Quality Assurance Specialist for Blue Lotus Media.
      Review the following blog post draft.
      
      Critique it based on:
      1. High technical depth and professional tone.
      2. Absence of annoying "AI-isms" like "In conclusion," "Delve into," or "Fast-paced digital world".
      3. Proper Markdown formatting, including the frontmatter.
      
      Instructions:
      - If the post is excellent and meets all standards, reply with EXACTLY the original draft, unmodified.
      - If there are minor issues, "AI-isms", or formatting errors, rewrite those specific sections and reply with the CORRECTED full draft.
      - If the post is completely generic, off-topic, or unsalvageable, reply ONLY with the word "REJECT".
      
      Draft to review:
      ${draft}
    `;

    const qaResult = execSync('gemini --approval-mode yolo', {
      input: reviewPrompt,
      maxBuffer: 1024 * 1024 * 10
    }).toString().trim();

    let finalContent = extractMarkdown(qaResult);

    if (finalContent === 'REJECT') {
      console.error("❌ QA Review Failed: The generated post was rejected by the autonomous editor for low quality.");
      process.exit(1);
    }

    // Ensure the content directory exists
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(filePath, finalContent);
    console.log(`✅ Successfully generated and QA approved: ${fileName}`);
  } catch (error) {
    console.error("Error generating post.");
    if (error.stdout) console.error("STDOUT:", error.stdout.toString());
    if (error.stderr) console.error("STDERR:", error.stderr.toString());
    process.exit(1);
  }
}

generatePost();
