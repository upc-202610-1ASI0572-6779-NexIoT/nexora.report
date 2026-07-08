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

const ASSET_PATH_REGEX = /((?:src=["']|href=["']|!\[.*?\]\()|url\()(?:\.\.[\/\\]|\.[\/\\]|\/[\/\\]|[\/\\])*assets([^)"'>\r\n]*?)(\)|["'])/g;
const FENCED_CODE_BLOCK_REGEX = /```[\s\S]*?```/g;

function getMarkdownFiles(dir) {
  let results = [];
  let list;
  try {
    list = fs.readdirSync(dir);
  } catch {
    return results;
  }
  for (const file of list) {
    if (file.startsWith('.') || file === 'node_modules') continue;
    const filePath = path.join(dir, file);
    let stat;
    try {
      stat = fs.statSync(filePath);
    } catch {
      continue;
    }
    if (stat.isDirectory()) {
      results = results.concat(getMarkdownFiles(filePath));
    } else if (file.toLowerCase().endsWith('.md')) {
      results.push(filePath);
    }
  }
  return results;
}

function normalizeAssetPaths(content) {
  const parts = [];
  let lastIndex = 0;
  let match;

  FENCED_CODE_BLOCK_REGEX.lastIndex = 0;
  while ((match = FENCED_CODE_BLOCK_REGEX.exec(content)) !== null) {
    parts.push(content.slice(lastIndex, match.index).replace(ASSET_PATH_REGEX, assetReplacer));
    parts.push(match[0]);
    lastIndex = match.index + match[0].length;
  }
  parts.push(content.slice(lastIndex).replace(ASSET_PATH_REGEX, assetReplacer));

  return parts.join('');
}

function assetReplacer(match, prefix, assetPath, suffix) {
  const normalized = assetPath.replace(/\\/g, '/').replace(/\/+/g, '/');
  const cleanPath = normalized.startsWith('/') ? normalized : '/' + normalized;
  return `${prefix}assets${cleanPath}${suffix}`;
}

function buildReadme() {
  const allFiles = [];

  for (const dirName of rootDirs) {
    const dirPath = path.join(__dirname, dirName);
    if (fs.existsSync(dirPath)) {
      const files = getMarkdownFiles(dirPath);
      files.sort((a, b) => a.localeCompare(b));
      allFiles.push(...files);
    } else {
      console.warn(`Warning: Directory ${dirName} does not exist.`);
    }
  }

  console.log(`Found ${allFiles.length} markdown files to combine:`);
  for (const [index, file] of allFiles.entries()) {
    console.log(`${index + 1}. ${path.relative(__dirname, file)}`);
  }

  const combinedContent = allFiles
    .map(file => {
      try {
        const content = fs.readFileSync(file, 'utf8');
        return normalizeAssetPaths(content).trim();
      } catch (err) {
        console.error(`Error reading ${file}: ${err.message}`);
        return '';
      }
    })
    .filter(content => content.length > 0)
    .join('\n\n---\n\n');

  const outputPath = path.join(__dirname, 'README.md');
  fs.writeFileSync(outputPath, combinedContent + '\n', 'utf8');
  console.log(`\nSuccessfully generated README.md (${fs.statSync(outputPath).size} bytes)`);
}

buildReadme();
