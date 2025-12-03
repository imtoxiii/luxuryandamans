const fs = require('fs');
const path = require('path');

const destinationsDir = path.join(__dirname, '../public/images/destinations');
const outputFile = path.join(__dirname, '../src/data/destinationImages.json');

function generateManifest() {
  if (!fs.existsSync(destinationsDir)) {
    console.log('Destinations directory not found.');
    fs.writeFileSync(outputFile, '{}');
    return;
  }

  const manifest = {};
  const destinations = fs.readdirSync(destinationsDir);

  destinations.forEach(slug => {
    const slugDir = path.join(destinationsDir, slug);
    if (fs.statSync(slugDir).isDirectory()) {
      const files = fs.readdirSync(slugDir).filter(file => 
        /\.(jpg|jpeg|png|webp|gif)$/i.test(file)
      );
      
      if (files.length > 0) {
        manifest[slug] = files.map(file => `/images/destinations/${slug}/${file}`);
      }
    }
  });

  fs.writeFileSync(outputFile, JSON.stringify(manifest, null, 2));
  console.log(`Generated image manifest at ${outputFile}`);
}

generateManifest();
