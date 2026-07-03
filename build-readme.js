const fs = require('fs');
const path = require('path');

// Root directories to scan, in order
const rootDirs = [
  '00-front-matter',
  '10-chapter-1-introduction',
  '20-chapter-2-requirements-elicitation',
  '30-chapter-3-requirements-specification',
  '40-chapter-4-software-design',
  '50-chapter-5-ui-ux-design',
  '60-chapter-6-implementation-validation',
  '70-conclusions-and-recommendations',
  '80-bibliography',
  '90-annexes'
];

function getMarkdownFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getMarkdownFiles(filePath));
    } else if (file.toLowerCase().endsWith('.md')) {
      results.push(filePath);
    }
  });
  return results;
}

function buildReadme() {
  const allFiles = [];

  rootDirs.forEach(dirName => {
    const dirPath = path.join(__dirname, dirName);
    if (fs.existsSync(dirPath)) {
      const files = getMarkdownFiles(dirPath);
      // Sort files within each main directory alphabetically/lexicographically by path
      files.sort((a, b) => a.localeCompare(b));
      allFiles.push(...files);
    } else {
      console.warn(`Warning: Directory ${dirName} does not exist.`);
    }
  });

  console.log(`Found ${allFiles.length} markdown files to combine:`);
  allFiles.forEach((file, index) => {
    console.log(`${index + 1}. ${path.relative(__dirname, file)}`);
  });

  const assetRegex = /((?:src=["']|href=["']|!\[.*?\]\()|url\()(?:\.\.[\/\\]|\/[\/\\]|[\/\\])*assets([^)"'>\r\n]*?)(\)|["'])/g;

  const combinedContent = allFiles
    .map(file => {
      let content = fs.readFileSync(file, 'utf8');
      
      // Normalize asset paths relative to the root folder
      content = content.replace(assetRegex, (match, group1, group2, group3) => {
        const normalizedPath = group2.replace(/\\/g, '/');
        let cleanPath = normalizedPath;
        if (!cleanPath.startsWith('/')) {
          cleanPath = '/' + cleanPath;
        }
        return `${group1}assets${cleanPath}${group3}`;
      });

      return content.trim();
    })
    .join('\n\n---\n\n');

  // Add a trailing newline to follow standard conventions
  const finalContent = combinedContent + '\n';

  const outputPath = path.join(__dirname, 'README.md');
  fs.writeFileSync(outputPath, finalContent, 'utf8');
  console.log(`\nSuccessfully generated README.md (${fs.statSync(outputPath).size} bytes)`);
}

buildReadme();
