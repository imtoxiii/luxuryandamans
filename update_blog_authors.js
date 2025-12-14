const fs = require('fs');
const path = require('path');

const blogDir = path.join(process.cwd(), 'src/data/blog');
const authorFile = path.join(blogDir, 'author.ts');

if (!fs.existsSync(authorFile)) {
    console.error("author.ts not found, please create it first.");
    process.exit(1);
}

const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.ts') && f !== 'index.ts' && f !== 'author.ts');

files.forEach(file => {
    const filePath = path.join(blogDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Skip if already migrated
    if (content.includes('author: defaultAuthor')) {
        return;
    }

    // Regex to match the author object block
    // It captures "author:", whitespaces, "{", non-greedy content until "}"
    const authorRegex = /author:\s*\{[\s\S]*?\}/;

    if (authorRegex.test(content)) {
        // Replace the author object
        content = content.replace(authorRegex, 'author: defaultAuthor');

        // Add the import statement
        // checking if it's already there (unlikely if we are replacing author object but good practice)
        if (!content.includes("import { defaultAuthor }")) {
            content = "import { defaultAuthor } from './author';\n" + content;
        }

        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${file}`);
    } else {
        console.log(`No author object found in ${file}, skipping.`);
    }
});
