/**
 * Batch cleanup: remove common AI-writing patterns from blog content strings.
 * Run: node scripts/improve-blog-content.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const blogDir = path.join(projectRoot, 'src', 'data', 'blog');
const legacyFile = path.join(projectRoot, 'src', 'data', 'blogPosts.ts');

const REPLACEMENTS = [
  [/##\s*Conclusion[^\n]*\n/gi, '## Final thoughts\n'],
  [/In conclusion[,:\s]/gi, 'Bottom line: '],
  [/Whether you're planning[^.]+\./gi, ''],
  [/Whether you are planning[^.]+\./gi, ''],
  [/Embark on a journey/gi, 'Start planning'],
  [/embark on a journey/gi, 'start planning'],
  [/Nestled in/gi, 'Located in'],
  [/nestled in/gi, 'located in'],
  [/hidden gem/gi, 'worth visiting spot'],
  [/Hidden gem/gi, 'Worth visiting spot'],
  [/Hidden Gem/gi, 'Worth visiting spot'],
  [/ultimate guide/gi, 'practical guide'],
  [/Ultimate Guide/gi, 'Practical Guide'],
  [/one-stop resource/gi, 'useful reference'],
  [/paradise awaits/gi, 'the islands are waiting'],
  [/✅\s*/g, ''],
  [/🛡️|👩‍🦰|🌊|🚫|🏥|🛥️/g, ''],
  [/##\s*(\d+\.\s*)?([^\n]+)\s*[🛡️👩‍🦰🌊🚫🏥🛥️]/g, '## $1$2'],
];

function improveContent(text) {
  let out = text;
  for (const [pattern, replacement] of REPLACEMENTS) {
    out = out.replace(pattern, replacement);
  }
  // Collapse triple+ newlines
  out = out.replace(/\n{4,}/g, '\n\n\n');
  return out;
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;

  // Only transform inside template literal content: blocks
  content = content.replace(/content:\s*`([\s\S]*?)`/g, (match, body) => {
    return 'content: `' + improveContent(body) + '`';
  });

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  }
  return false;
}

let changed = 0;
const files = fs.readdirSync(blogDir).filter((f) => f.endsWith('.ts') && f !== 'index.ts' && f !== 'blogSeoConfig.ts');
for (const file of files) {
  if (processFile(path.join(blogDir, file))) changed++;
}
if (processFile(legacyFile)) changed++;

console.log(`Improved content in ${changed} file(s).`);
