# 🏝️ Luxury Andamans PHP Email System - Installation Guide

## 📋 Overview

This guide will help you set up the complete PHP-based email system for your Luxury Andamans website. The system replaces the current EmailJS implementation with a robust PHP backend that uses your custom domain emails.

## ✅ What You'll Get

- **Professional Email System**: Sends emails from your domain (info@luxuryandamans.com, bookings@luxuryandamans.com)
- **Admin Notifications**: You'll receive detailed enquiry notifications at xummeet1987@gmail.com
- **User Confirmations**: Customers get professional confirmation emails
- **Backup System**: All submissions are logged to text files
- **Debugging Tools**: Comprehensive logging for troubleshooting

## 🚀 Quick Start

### Step 1: Set the Missing Password
1. Open `project/backend/config.php`
2. Find this line: `define('BOOKING_PASSWORD', '');`
3. Replace it with: `define('BOOKING_PASSWORD', 'your_bookings_email_password');`

### Step 2: Install Dependencies (Optional but Recommended)
```bash
cd project/backend
composer install
```

### Step 3: Upload to Your Server
Upload the entire `project/backend` folder to your web server.

### Step 4: Test the Setup
Visit: `http://your-domain.com/backend/setup.php`

### Step 5: Update Frontend URL
In `project/src/lib/email.ts`, update this line:
```typescript
const PHP_BACKEND_URL = 'http://your-domain.com/backend/processForm.php';
```

## 📧 Email Flow

### When a User Submits a Form:

1. **User fills form** → Frontend sends data to PHP backend
2. **PHP processes data** → Validates and sanitizes input
3. **Two emails sent**:
   - **To Admin** (xummeet1987@gmail.com): Detailed enquiry notification from info@luxuryandamans.com
   - **To User**: Professional confirmation from bookings@luxuryandamans.com
4. **Backup created** → Form data saved to text file
5. **Response sent** → Frontend shows success/error message

## 📁 Files Created

```
project/backend/
├── config.php              # Email configuration
├── phpmailer.php           # Email sending logic
├── emailHandler.php        # Email templates and processing
├── processForm.php         # Main form processor (frontend calls this)
├── setup.php              # Setup and testing page
├── composer.json          # PHPMailer dependencies
├── .htaccess              # Apache configuration
├── README.md              # Detailed documentation
└── logs/                  # Created automatically
    ├── form_submissions.txt
    ├── form_errors.txt
    └── console.log
```

## 🔧 Configuration Details

### Email Accounts Used:
- **info@luxuryandamans.com** (Password: Sumeet@26) → Sends admin notifications
- **bookings@luxuryandamans.com** (Password: YOU NEED TO SET THIS) → Sends user confirmations
- **xummeet1987@gmail.com** → Receives all admin notifications

### SMTP Settings:
- **Host**: mail.luxuryandamans.com
- **Port**: 465 (SSL)
- **Authentication**: Required

## 🛠️ Testing

### 1. Visit Setup Page
Go to: `http://your-domain.com/backend/setup.php`

This page will:
- Check PHP configuration
- Test logging functionality
- Verify SMTP settings
- Provide a test form

### 2. Test Form Submission
Use the test form on the setup page or submit a real form from your website.

### 3. Check Logs
Look in the `logs/` directory for:
- `form_submissions.txt` - Successful submissions
- `form_errors.txt` - Any errors
- `console.log` - Detailed debugging info

## 🎨 Email Templates

### Admin Email Features:
- 🏝️ Luxury Andamans branding
- 📊 Organized customer data display
- ⏰ Timestamp and form type
- 🚀 Next steps guidance
- 📱 Mobile-friendly design

### User Confirmation Features:
- 🎯 Professional welcome message
- ⏳ Clear timeline of next steps
- 📞 Contact information
- 🌟 Company value propositions
- 💎 Premium branding

## 🔍 Debugging

### Console Logs
Every action is logged with emojis for easy identification:
- 🚀 Form processing started
- 📧 Email sending attempts
- ✅ Successful operations
- ❌ Error conditions
- 📊 Status updates

### Log File Locations:
```bash
# View recent submissions
tail -f backend/logs/form_submissions.txt

# Check for errors
tail -f backend/logs/form_errors.txt

# Debug information
tail -f backend/logs/console.log
```

## 🚨 Troubleshooting

### Common Issues:

1. **"BOOKING_PASSWORD not set" Error**
   - Solution: Add the password for bookings@luxuryandamans.com in config.php

2. **Emails not sending**
   - Check SMTP credentials
   - Verify server supports mail() function
   - Check logs for specific errors

3. **Permission denied errors**
   - Ensure web server can write to logs/ directory
   - Set proper file permissions (755 for directories)

4. **Frontend connection errors**
   - Verify PHP_BACKEND_URL is correct
   - Check CORS headers
   - Ensure processForm.php is accessible

### Testing Commands:
```bash
# Test PHP mail function
php -r "echo (function_exists('mail') ? 'Mail function available' : 'Mail function not available');"

# Check file permissions
ls -la backend/logs/

# Test web server access
curl -X POST http://your-domain.com/backend/processForm.php
```

## 📈 Monitoring

### Success Indicators:
- ✅ Entries in `form_submissions.txt`
- ✅ Users receiving confirmation emails
- ✅ Admin receiving notification emails
- ✅ No errors in `form_errors.txt`

### Regular Maintenance:
- Check log files weekly
- Monitor email delivery rates
- Review form submission patterns
- Backup log files monthly

## 🔒 Security Features

- ✅ Input sanitization and validation
- ✅ XSS protection
- ✅ Email format validation
- ✅ Protected configuration files
- ✅ Secure file permissions
- ✅ Error logging without data exposure

## 📞 Support

If you encounter issues:

1. **Check setup.php** - Visit the setup page for diagnostics
2. **Review logs** - Check the logs/ directory for errors
3. **Test manually** - Use the test form in setup.php
4. **Email support** - Contact info@luxuryandamans.com

## 🎯 Next Steps After Installation

1. **Set booking email password** in config.php
2. **Test the system** using setup.php
3. **Update frontend URL** to point to your server
4. **Monitor logs** for the first few submissions
5. **Backup log files** regularly

---

## 📝 Quick Checklist

- [ ] Set BOOKING_PASSWORD in config.php
- [ ] Upload backend files to server
- [ ] Run composer install (optional)
- [ ] Visit setup.php and check all green checkmarks
- [ ] Update PHP_BACKEND_URL in frontend
- [ ] Test form submission
- [ ] Check both admin and user receive emails
- [ ] Verify logs are being created

**🎉 Once all items are checked, your email system is ready!**

---

*Created for Luxury Andamans Website - Professional Email System* 