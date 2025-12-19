import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, '../src/assets/images');

async function processDirectory(directory) {
  const files = fs.readdirSync(directory);

  for (const file of files) {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      await processDirectory(filePath);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        const webpPath = filePath.replace(ext, '.webp');
        
        // Always try to convert even if exists, to verify size
        console.log(`Processing ${file}...`);
        
        try {
          const originalBuffer = fs.readFileSync(filePath);
          const originalSize = stat.size;

          const webpBuffer = await sharp(originalBuffer)
            .webp({ 
              quality: 65, 
              effort: 6,
              smartSubsample: true 
            })
            .toBuffer();
          
          if (webpBuffer.length < originalSize) {
            fs.writeFileSync(webpPath, webpBuffer);
            console.log(`✅ Created WebP for ${file}: ${(webpBuffer.length/1024).toFixed(2)}KB (Original: ${(originalSize/1024).toFixed(2)}KB)`);
          } else {
            console.log(`⚠️ WebP larger than original for ${file}. Skipping.`);
            if (fs.existsSync(webpPath)) {
                // Check if existing webp is actually smaller (from previous run?)
                const existingStat = fs.statSync(webpPath);
                if (existingStat.size > originalSize) {
                    console.log(`   Deleting existing larger WebP.`);
                    fs.unlinkSync(webpPath);
                }
            }
          }
        } catch (error) {
          console.error(`Error converting ${filePath}:`, error);
        }
      }
    }
  }
}

console.log('Starting optimized image conversion...');
processDirectory(rootDir).then(() => {
  console.log('Image conversion complete!');
}).catch(err => {
  console.error('Error during conversion:', err);
});
