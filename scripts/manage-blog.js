const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const blogDir = path.join(process.cwd(), 'content/blog');
const action = process.argv[2];

function getFiles() {
  if (!fs.existsSync(blogDir)) return [];
  return fs.readdirSync(blogDir).filter(f => f.endsWith('.md')).sort().reverse();
}

if (action === 'list') {
  const files = getFiles();
  console.log('\n--- Current Blog Posts ---');
  if (files.length === 0) {
    console.log('No posts found.');
  } else {
    files.forEach((file, i) => {
      console.log(`[${i + 1}] ${file}`);
    });
  }
  console.log('--------------------------\n');
  console.log('To delete a post: npm run blog:delete <number>');
  console.log('To generate a post: npm run blog:generate');
} else if (action === 'delete') {
  const indexStr = process.argv[3];
  if (!indexStr) {
    console.log('Error: Please provide a post number from the list.');
    process.exit(1);
  }
  
  const index = parseInt(indexStr) - 1;
  const files = getFiles();
  
  if (files[index]) {
    const fileToDelete = path.join(blogDir, files[index]);
    fs.unlinkSync(fileToDelete);
    console.log(`\n✅ Successfully deleted: ${files[index]}\n`);
    
    // Auto-update distribution assets
    updateAssets();
  } else {
    console.log(`\n❌ Error: Post #${indexStr} not found. Run 'npm run blog:list' first.\n`);
  }
} else if (action === 'generate') {
  console.log('\n🚀 Initializing AI Content Engine...\n');
  try {
    execSync('node scripts/ai-writer.js', { stdio: 'inherit' });
    
    // Auto-update distribution assets
    updateAssets();
  } catch (e) {
    // Error handled by ai-writer
  }
}

function updateAssets() {
  console.log('\n🔄 Updating distribution assets...');
  try {
    // Update RSS Feed
    execSync('npm run rss', { stdio: 'inherit' });
    
    // Update Sitemap (if next-sitemap is installed and configured)
    console.log('🗺️  Updating sitemap...');
    execSync('npx next-sitemap', { stdio: 'inherit' });
    
    console.log('\n✨ All assets updated and ready for deployment.\n');
  } catch (err) {
    console.log('\n⚠️  Warning: Distribution assets could not be updated automatically.');
    console.log('You may need to run "npm run build" to sync all changes.\n');
  }
} else {
  console.log('\n--- Blue Lotus Blog Manager ---');
  console.log('Usage:');
  console.log('  npm run blog:list       - Show all posts');
  console.log('  npm run blog:generate   - Run the AI writer manually');
  console.log('  npm run blog:delete <#> - Delete post by number');
  console.log('-------------------------------\n');
}
