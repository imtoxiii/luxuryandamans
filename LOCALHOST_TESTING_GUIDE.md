# 🏠 Localhost Testing Guide - Luxury Andamans Email System

## 📋 Overview

This guide will help you test the PHP email system on your local development environment before uploading to your production server.

## 🛠️ Prerequisites

### Required Software:
- **XAMPP/WAMP/MAMP** (includes Apache + PHP + MySQL)
- **Node.js** (for your React frontend)
- **Git** (to manage code)

### Download Links:
- **XAMPP**: https://www.apachefriends.org/download.html
- **Node.js**: https://nodejs.org/

## 🚀 Step-by-Step Setup

### Step 1: Install and Start XAMPP

1. **Download and install XAMPP**
2. **Start XAMPP Control Panel**
3. **Start Apache** (click "Start" next to Apache)
4. **Verify Apache is running**: Visit http://localhost - you should see XAMPP dashboard

### Step 2: Set Up the PHP Backend

1. **Navigate to XAMPP htdocs folder**:
   ```
   Windows: C:\xampp\htdocs\
   Mac: /Applications/XAMPP/htdocs/
   Linux: /opt/lampp/htdocs/
   ```

2. **Create project folder**:
   ```bash
   cd C:\xampp\htdocs\
   mkdir luxury-andamans
   cd luxury-andamans
   ```

3. **Copy backend files**:
   Copy your entire `project/backend` folder to `C:\xampp\htdocs\luxury-andamans\backend`

4. **Set the missing password**:
   Edit `backend/config.php` and add your booking email password:
   ```php
   define('BOOKING_PASSWORD', 'your_bookings_email_password_here');
   ```

### Step 3: Test Backend Setup

1. **Visit the setup page**: http://localhost/luxury-andamans/backend/setup.php
2. **Check all status indicators** - they should be green ✅
3. **Use the test form** to send a test email
4. **Check logs folder** for generated log files

### Step 4: Set Up Frontend

1. **Navigate to your React project**:
   ```bash
   cd path/to/your/project
   ```

2. **Update the backend URL** in `src/lib/email.ts`:
   ```typescript
   const PHP_BACKEND_URL = 'http://localhost/luxury-andamans/backend/processForm.php';
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Your React app should open at**: http://localhost:5173 (or similar)

### Step 5: Test Complete Flow

1. **Open your React app** in browser
2. **Navigate to contact/enquiry pages**
3. **Fill out and submit forms**
4. **Check browser console** for success/error messages
5. **Check backend logs** in `C:\xampp\htdocs\luxury-andamans\backend/logs/`

## 🧪 Testing Tools

### 1. Backend Testing Page
Visit: http://localhost/luxury-andamans/backend/localhost-test.php

Features:
- ✅ System status check
- 🧪 Test email form
- 🔗 Frontend connection test
- 📊 Real-time logging
- 📁 Log file monitoring

### 2. Setup Diagnostics
Visit: http://localhost/luxury-andamans/backend/setup.php

Features:
- ✅ PHP configuration check
- 📁 Directory permissions
- 📧 Email function testing
- 🔧 PHPMailer status

## 📁 File Structure (Localhost)

```
C:\xampp\htdocs\luxury-andamans\
└── backend/
    ├── config.php                  # Main configuration
    ├── localhost-config.php        # Localhost overrides
    ├── phpmailer.php              # Email engine
    ├── emailHandler.php           # Email templates
    ├── processForm.php            # Form processor
    ├── setup.php                  # Setup diagnostics
    ├── localhost-test.php         # Testing interface
    ├── .htaccess                  # Apache config
    └── logs/                      # Log files
        ├── localhost-test-emails.log
        ├── localhost-console.log
        ├── form_submissions.txt
        └── form_errors.txt
```

## 🔍 Testing Checklist

### Backend Tests:
- [ ] XAMPP Apache is running
- [ ] http://localhost/luxury-andamans/backend/setup.php shows all green
- [ ] Test form on setup.php works
- [ ] Log files are created in logs/ folder
- [ ] BOOKING_PASSWORD is set in config.php

### Frontend Tests:
- [ ] React dev server is running
- [ ] PHP_BACKEND_URL points to localhost
- [ ] Contact form submits successfully
- [ ] Enquiry form submits successfully
- [ ] Calculator form submits successfully
- [ ] Browser console shows success messages
- [ ] Backend logs show form submissions

### Integration Tests:
- [ ] Frontend can connect to PHP backend
- [ ] Form data is properly formatted
- [ ] Email templates are generated correctly
- [ ] Error handling works properly
- [ ] All form types are supported

## 🐛 Common Issues & Solutions

### Issue 1: "Cannot connect to backend"
**Solution:**
- Ensure XAMPP Apache is running
- Check if URL is correct: http://localhost/luxury-andamans/backend/processForm.php
- Verify .htaccess file exists and is configured properly

### Issue 2: "Permission denied" errors
**Solution:**
```bash
# Windows (run as administrator)
icacls "C:\xampp\htdocs\luxury-andamans\backend\logs" /grant Everyone:F

# Mac/Linux
chmod -R 755 /Applications/XAMPP/htdocs/luxury-andamans/backend/logs
```

### Issue 3: "CORS errors" in browser
**Solution:**
- Check .htaccess file has CORS headers
- Ensure localhost-config.php is loaded
- Try accessing backend URL directly in browser

### Issue 4: "PHP errors"
**Solution:**
- Check XAMPP PHP error logs
- Visit setup.php to see detailed error information
- Ensure all required PHP extensions are enabled

### Issue 5: Forms not submitting
**Solution:**
- Check browser network tab for failed requests
- Verify form data format matches backend expectations
- Check backend logs for processing errors

## 📊 Monitoring & Debugging

### Real-time Log Monitoring:
```bash
# Windows (PowerShell)
Get-Content "C:\xampp\htdocs\luxury-andamans\backend\logs\console.log" -Wait

# Mac/Linux
tail -f /Applications/XAMPP/htdocs/luxury-andamans/backend/logs/console.log
```

### Browser Console Debugging:
1. **Open Developer Tools** (F12)
2. **Go to Console tab**
3. **Submit forms** and watch for messages
4. **Check Network tab** for HTTP requests

### Log File Locations:
- **Form Submissions**: `logs/form_submissions.txt`
- **Errors**: `logs/form_errors.txt`
- **Debug Info**: `logs/console.log`
- **Test Emails**: `logs/localhost-test-emails.log`

## 🎯 Testing Scenarios

### Scenario 1: Contact Form
1. Go to Contact page
2. Fill out all fields
3. Submit form
4. Check for success message
5. Verify log entry created

### Scenario 2: Enquiry Form
1. Go to Enquiry page
2. Complete multi-step form
3. Submit enquiry
4. Check for confirmation
5. Verify detailed log entry

### Scenario 3: Calculator Form
1. Go to Pricing Calculator
2. Configure trip options
3. Submit enquiry
4. Check for package details in logs
5. Verify pricing information included

### Scenario 4: Error Handling
1. Submit form with invalid email
2. Submit form with missing required fields
3. Disconnect internet and submit
4. Check error messages and logs

## 🚀 Ready for Production?

Once all localhost tests pass:

1. **Upload backend files** to your web server
2. **Update frontend URL** to production domain
3. **Set production passwords** in config.php
4. **Test on production** using setup.php
5. **Monitor production logs** for issues

## 📞 Troubleshooting Support

If you encounter issues:

1. **Check setup.php** for system diagnostics
2. **Review log files** for detailed error information
3. **Test individual components** using localhost-test.php
4. **Verify XAMPP configuration** and restart if needed

---

**🎉 Happy Testing!**

*This localhost testing environment will help you perfect your email system before going live.* 