# 🚀 cPanel Deployment Guide for Luxury Andamans

This guide will help you deploy your React application to cPanel hosting.

## 📋 Prerequisites

- Access to your cPanel hosting account
- FTP/File Manager access
- Domain configured to point to your hosting

## 🔧 Deployment Steps

### Step 1: Build the Project

```bash
npm run build
```

This creates a `dist` folder with all the production files.

### Step 2: Upload Files to cPanel

1. **Access File Manager** in your cPanel
2. **Navigate** to your domain's public_html folder (or subdirectory)
3. **Upload** all contents from the `dist` folder to your web directory

**Important Files to Upload:**
- `index.html` (main entry point)
- `assets/` folder (contains all CSS, JS, and images)
- `.htaccess` file (handles routing - very important!)

### Step 3: Verify .htaccess File

Ensure the `.htaccess` file is in your domain's root directory with these contents:

```apache
RewriteEngine On

# Handle Angular and React Routes
RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} -f [OR]
RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} -d
RewriteRule ^ - [L]
RewriteRule ^ /index.html [L]

# Enable GZIP compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>
```

### Step 4: Set File Permissions

Set proper permissions for security:
- Folders: 755
- Files: 644
- .htaccess: 644

### Step 5: Test Your Website

1. Visit your domain: `https://luxuryandamans.com`
2. Test direct URLs like: `https://luxuryandamans.com/destinations`
3. Check that all routes work without 404 errors

## 🔍 Troubleshooting

### Common Issues & Solutions

**404 Errors on Direct URLs:**
- Ensure `.htaccess` file is uploaded and has correct content
- Check that mod_rewrite is enabled on your hosting

**White Screen:**
- Check browser console for JavaScript errors
- Verify all files uploaded correctly
- Ensure file permissions are correct

**Images Not Loading:**
- Check file paths are correct
- Verify images are in the assets folder
- Check file permissions

**Mobile Menu White Screen:**
- This has been fixed in the latest version
- Ensure you're using the updated Header component

## 📱 Mobile Optimization

The app now includes:
- ✅ Fixed mobile hamburger menu
- ✅ Proper responsive design
- ✅ Touch-friendly navigation
- ✅ Clickable phone numbers: `+91 6297576826` and `+91 9433731478`

## 🌐 Features Included

- ✅ **SPA Routing**: All routes work with direct URLs
- ✅ **SEO Optimized**: Meta tags and structured data
- ✅ **Mobile Responsive**: Works perfectly on all devices
- ✅ **Contact Integration**: Clickable phone numbers and emails
- ✅ **Performance Optimized**: Compressed assets and caching

## 📞 Support

If you encounter any issues:

1. **Check Browser Console**: Press F12 → Console for errors
2. **Verify File Upload**: Ensure all files from `dist` folder are uploaded
3. **Check .htaccess**: This file is crucial for routing to work
4. **Contact Support**: If issues persist, contact your hosting provider

## 🎉 You're All Set!

Your Luxury Andamans website should now be live and fully functional on cPanel hosting with:
- Working direct URLs
- Mobile-friendly navigation
- Clickable contact information
- SEO optimization
- Fast loading times

Visit your website and enjoy your beautiful Andaman Islands travel site! 🏝️ 