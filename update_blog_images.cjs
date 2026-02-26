const fs = require('fs');
const path = require('path');

const blogDir = path.join(__dirname, 'src/data/blog');

const pexelsImages = {
  beach: [
    "https://images.pexels.com/photos/32932742/pexels-photo-32932742/free-photo-of-relaxing-on-palm-tree-at-maldives-beach.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/12934731/pexels-photo-12934731.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/33280601/pexels-photo-33280601/free-photo-of-serene-tropical-beach-sunset-with-palms.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/12579155/pexels-photo-12579155.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/5858996/pexels-photo-5858996.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/5390337/pexels-photo-5390337.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/13180497/pexels-photo-13180497.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/34519397/pexels-photo-34519397/free-photo-of-tropical-palm-tree-on-maldivian-beach.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/15796414/pexels-photo-15796414/free-photo-of-beach-restaurant-tropical-paradise-pool.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/14923409/pexels-photo-14923409.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/34519393/pexels-photo-34519393/free-photo-of-man-relaxing-with-surfboard-on-maldives-beach.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/240526/pexels-photo-240526.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/34777916/pexels-photo-34777916/free-photo-of-luxurious-floating-breakfast-in-the-maldives.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/20161601/pexels-photo-20161601/free-photo-of-foco-no-mar.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/17320214/pexels-photo-17320214/free-photo-of-palm-fronds.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/1320674/pexels-photo-1320674.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/30693592/pexels-photo-30693592/free-photo-of-dramatic-aerial-view-of-secluded-tropical-beach.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/5598760/pexels-photo-5598760.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/33457520/pexels-photo-33457520/free-photo-of-scenic-beach-view-with-mountains-and-clouds-in-the-philippines.jpeg?auto=compress&cs=tinysrgb&w=1200"
  ],
  scuba: [
    "https://images.pexels.com/photos/16851074/pexels-photo-16851074/free-photo-of-couple-in-scuba-diving-equipment-in-water.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/7001664/pexels-photo-7001664.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/15763623/pexels-photo-15763623/free-photo-of-scuba-divers-swimming-near-shipwreck.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/12626990/pexels-photo-12626990.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/4766819/pexels-photo-4766819.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/35252466/pexels-photo-35252466/free-photo-of-group-of-divers-exploring-underwater-depths.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/3098980/pexels-photo-3098980.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/14565669/pexels-photo-14565669.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/18505543/pexels-photo-18505543/free-photo-of-people-diving-underwater.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/28800340/pexels-photo-28800340/free-photo-of-silhouetted-scuba-divers-underwater-adventure.jpeg?auto=compress&cs=tinysrgb&w=1200"
  ],
  resort: [
    "https://images.pexels.com/photos/2506988/pexels-photo-2506988.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/9400917/pexels-photo-9400917.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/13221389/pexels-photo-13221389.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/14036446/pexels-photo-14036446.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/2227827/pexels-photo-2227827.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/2724079/pexels-photo-2724079.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/27830772/pexels-photo-27830772/free-photo-of-the-pool-at-the-resort-in-spain.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/28443535/pexels-photo-28443535/free-photo-of-atlantis-nassau.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/1488515/pexels-photo-1488515.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/4628191/pexels-photo-4628191.jpeg?auto=compress&cs=tinysrgb&w=1200"
  ],
  ferry: [
    "https://images.pexels.com/photos/4837939/pexels-photo-4837939.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/12090153/pexels-photo-12090153.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/3617141/pexels-photo-3617141.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/3551208/pexels-photo-3551208.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/2846820/pexels-photo-2846820.jpeg?auto=compress&cs=tinysrgb&w=1200"
  ],
  night: [
    "https://images.pexels.com/photos/1059161/pexels-photo-1059161.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/2690764/pexels-photo-2690764.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/2100918/pexels-photo-2100918.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/5878513/pexels-photo-5878513.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/4762395/pexels-photo-4762395.jpeg?auto=compress&cs=tinysrgb&w=1200"
  ],
  food: [
    "https://images.pexels.com/photos/17249035/pexels-photo-17249035/free-photo-of-exotic-fruit-on-yellow-background.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/5945867/pexels-photo-5945867.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/16900409/pexels-photo-16900409/free-photo-of-tropical-fruits-on-a-wooden-tray.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/6158116/pexels-photo-6158116.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/137089/pexels-photo-137089.jpeg?auto=compress&cs=tinysrgb&w=1200"
  ]
};

function getRandomImage(category) {
  const images = pexelsImages[category] || pexelsImages.beach;
  return images[Math.floor(Math.random() * images.length)];
}

function determineCategory(filename, text) {
  const content = (filename + ' ' + text).toLowerCase();
  
  if (content.includes('scuba') || content.includes('diving') || content.includes('underwater')) return 'scuba';
  if (content.includes('bioluminescence') || content.includes('night') || content.includes('moon') || content.includes('star')) return 'night';
  if (content.includes('food') || content.includes('seafood') || content.includes('restaurant')) return 'food';
  if (content.includes('ferry') || content.includes('boat') || content.includes('ship') || content.includes('cruise')) return 'ferry';
  if (content.includes('resort') || content.includes('hotel') || content.includes('villa') || content.includes('luxury') || content.includes('stay')) return 'resort';
  
  return 'beach'; // Default
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let filename = path.basename(filePath);
  
  const originalContent = content;
  const category = determineCategory(filename, originalContent.substring(0, 5000));
  
  // 1. Replace src: '...' or src: "..." or src: `...`
  // Regex must be careful not to break anything.
  const srcRegex = /src:\s*(['"`])([\s\S]*?)\1/g;
  content = content.replace(srcRegex, (match, quote, url) => {
    if (url.includes('pexels.com')) return match; 
    const newUrl = getRandomImage(category);
    console.log(`[${filename}] Replacing src: ${url.substring(0, 20)}... -> ${newUrl.substring(0, 20)}...`);
    return `src: '${newUrl}'`;
  });

  // 2. Replace image: '...' or image: "..." (often found in the post object)
  // We need to match key 'image' followed by colon and string.
  // Note: some objects might have 'image' property which isn't the main post image, but usually it is.
  const imageKeyRegex = /image:\s*(['"`])([\s\S]*?)\1/g;
  content = content.replace(imageKeyRegex, (match, quote, url) => {
    if (url.includes('pexels.com')) return match;
    const newUrl = getRandomImage(category);
    console.log(`[${filename}] Replacing image: ${url.substring(0, 20)}... -> ${newUrl.substring(0, 20)}...`);
    return `image: '${newUrl}'`;
  });
  
  // 3. Replace markdown images ![alt](url)
  // Regex: !\[(.*?)\]\((.*?)\)
  // We want to capture the alt text (group 1) and url (group 2)
  const markdownRegex = /!\[(.*?)\]\((.*?)\)/g;
  content = content.replace(markdownRegex, (match, alt, url) => {
    if (url.includes('pexels.com')) return match;
    // Only replace if it looks like an image path (starts with http, /img, or relative path)
    // and definitely not if it's some other link type, but ![...] implies image.
    const newUrl = getRandomImage(category);
    console.log(`[${filename}] Replacing markdown: ${url.substring(0, 20)}... -> ${newUrl.substring(0, 20)}...`);
    return `![${alt}](${newUrl})`;
  });

  // 4. Special cases like <img src="..."> in template strings
  // Regex: <img\s+[^>]*src=(['"])(.*?)\1
  // This is tricky because src might be dynamic `${...}`.
  // If it is dynamic, my srcRegex usually catches it if it is inside the 'images' object definition as `src: ...`.
  // If it is inline in content: `<img src="https://..." ... />`
  const htmlImgRegex = /<img\s+[^>]*src=(['"])(.*?)\1/g;
  content = content.replace(htmlImgRegex, (match, quote, url) => {
    if (url.includes('pexels.com')) return match;
    // Use match.replace to only replace the src part
    const newUrl = getRandomImage(category);
    console.log(`[${filename}] Replacing HTML img: ${url.substring(0, 20)}... -> ${newUrl.substring(0, 20)}...`);
    // We reconstruct the src part.
    // simpler: match contains the whole <img ... src="..." substring until the closing quote of src?
    // No, regex matches until closing quote of src.
    // So match is `<img ... src="OLD_URL"`.
    // We want to return `<img ... src="NEW_URL"`.
    // We can just replace the capture group in the match string.
    return match.replace(url, newUrl);
  });
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filename}`);
  }
}

// Main
fs.readdirSync(blogDir).forEach(file => {
  if (file === 'index.ts' || file === 'author.ts') return;
  if (!file.endsWith('.ts')) return;
  
  processFile(path.join(blogDir, file));
});
