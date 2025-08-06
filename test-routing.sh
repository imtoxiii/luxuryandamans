#!/bin/bash

echo "🧪 Testing Routing and SEO Configuration"
echo "========================================"

# Check if .htaccess exists and has correct content
echo "1. Checking .htaccess file..."
if [ -f "public/.htaccess" ]; then
    echo "✅ .htaccess exists"
    if grep -q "RewriteRule.*index.html" public/.htaccess; then
        echo "✅ SPA routing rule found"
    else
        echo "❌ SPA routing rule missing"
    fi
else
    echo "❌ .htaccess file missing"
fi

# Check if all route files exist
echo -e "\n2. Checking route files..."
declare -a routes=(
    "src/pages/Home.tsx"
    "src/pages/Destinations.tsx"
    "src/pages/Packages.tsx"
    "src/pages/Experiences.tsx"
    "src/pages/Contact.tsx"
    "src/pages/About.tsx"
    "src/pages/Blog.tsx"
    "src/pages/PricingCalculator.tsx"
    "src/pages/FAQ.tsx"
    "src/pages/Privacy.tsx"
    "src/pages/Terms.tsx"
    "src/pages/Sitemap.tsx"
)

for route in "${routes[@]}"; do
    if [ -f "$route" ]; then
        echo "✅ $route exists"
    else
        echo "❌ $route missing"
    fi
done

# Check experience pages
echo -e "\n3. Checking experience pages..."
declare -a experiences=(
    "src/pages/experiences/luxury-resorts.tsx"
    "src/pages/experiences/scuba-diving.tsx"
    "src/pages/experiences/island-hopping.tsx"
    "src/pages/experiences/sunset-cruises.tsx"
    "src/pages/experiences/wellness-retreats.tsx"
    "src/pages/experiences/romantic-getaways.tsx"
    "src/pages/experiences/family-adventures.tsx"
)

for exp in "${experiences[@]}"; do
    if [ -f "$exp" ]; then
        echo "✅ $exp exists"
    else
        echo "❌ $exp missing"
    fi
done

# Check dynamic pages
echo -e "\n4. Checking dynamic pages..."
declare -a dynamic=(
    "src/pages/destinations/[slug].tsx"
    "src/pages/packages/[slug].tsx"
    "src/pages/locations/[slug].tsx"
    "src/pages/blog/[slug].tsx"
)

for dyn in "${dynamic[@]}"; do
    if [ -f "$dyn" ]; then
        echo "✅ $dyn exists"
    else
        echo "❌ $dyn missing"
    fi
done

# Check SEO component
echo -e "\n5. Checking SEO implementation..."
if [ -f "src/components/SEO.tsx" ]; then
    echo "✅ SEO component exists"
    if grep -q "Helmet" src/components/SEO.tsx; then
        echo "✅ React Helmet implementation found"
    else
        echo "❌ React Helmet implementation missing"
    fi
else
    echo "❌ SEO component missing"
fi

# Check if pages use SEO component
echo -e "\n6. Checking SEO usage in pages..."
if grep -r "import.*SEO" src/pages/ > /dev/null; then
    echo "✅ SEO component is being imported"
    echo "Pages using SEO:"
    grep -r "import.*SEO" src/pages/ | cut -d: -f1 | sort -u
else
    echo "❌ SEO component not being used in pages"
fi

echo -e "\n7. Build configuration check..."
if [ -f "vite.config.ts" ]; then
    echo "✅ Vite config exists"
    if grep -q "base: '/'" vite.config.ts; then
        echo "✅ Base path is set to root"
    else
        echo "⚠️  Base path may need adjustment for subdirectory deployment"
    fi
else
    echo "❌ Vite config missing"
fi

echo -e "\n✅ Routing and SEO check complete!"
echo "   Run 'npm run build' to create production build"
echo "   Deploy contents of 'dist' folder to your web server"
