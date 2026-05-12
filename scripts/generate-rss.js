const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const SITE_URL = 'https://bluelotusmedia.com';
const BLOG_DIR = path.join(process.cwd(), 'content/blog');
const PUBLIC_DIR = path.join(process.cwd(), 'public');

function generateRSS() {
  console.log('📡 Generating RSS feed...');

  const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.md'));
  
  const posts = files.map(file => {
    const filePath = path.join(BLOG_DIR, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(content);
    const slug = file.replace(/\.md$/, '');
    
    return {
      title: data.title,
      description: data.description,
      date: new Date(data.date),
      url: `${SITE_URL}/blog/${slug}`,
      guid: slug
    };
  }).sort((a, b) => b.date - a.date);

  const items = posts.map(post => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${post.url}</link>
      <guid isPermaLink="false">${post.guid}</guid>
      <pubDate>${post.date.toUTCString()}</pubDate>
      <description><![CDATA[${post.description}]]></description>
    </item>`).join('');

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Blue Lotus Media Blog</title>
    <link>${SITE_URL}/blog</link>
    <description>Insights on AI, Web Performance, and Digital Strategy from Blue Lotus Media.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
    ${items}
  </channel>
</rss>`;

  if (!fs.existsSync(PUBLIC_DIR)) {
    fs.mkdirSync(PUBLIC_DIR, { recursive: true });
  }

  fs.writeFileSync(path.join(PUBLIC_DIR, 'rss.xml'), rss.trim());
  console.log('✅ RSS feed generated successfully at /public/rss.xml');
}

generateRSS();
