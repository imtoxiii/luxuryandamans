# 🏝️ Luxury Andamans PHP Email System

This PHP-based email system handles form submissions from your Luxury Andamans website and sends professional emails to both administrators and customers.

## 🚀 Features

- **Dual Email System**: Sends notifications to admin and confirmations to users
- **SMTP Authentication**: Uses your custom domain emails with proper SMTP settings
- **Backup System**: Logs all form submissions to text files as backup
- **Comprehensive Logging**: Detailed console logs for debugging
- **Multiple Form Types**: Handles contact, enquiry, and booking forms
- **Professional Email Templates**: Beautiful HTML emails with your branding
- **Error Handling**: Robust error handling with retry mechanisms
- **Security**: Input sanitization and validation

## 📧 Email Configuration

The system uses two email accounts:

### 1. Info Email (for sending admin notifications)
- **Email**: info@luxuryandamans.com  
- **Password**: Sumeet@26
- **Purpose**: Sends notifications to admin (xummeet1987@gmail.com)

### 2. Booking Email (for user confirmations)
- **Email**: bookings@luxuryandamans.com
- **Password**: [You need to provide this]
- **Purpose**: Sends confirmation emails to users

## 🛠️ Installation & Setup

### Step 1: Configure Email Password
1. Open `config.php`
2. Set the `BOOKING_PASSWORD` constant with the password for bookings@luxuryandamans.com

```php
define('BOOKING_PASSWORD', 'your_booking_email_password_here');
```

### Step 2: Install PHPMailer (Recommended)
```bash
cd project/backend
composer install
```

### Step 3: Set Up Web Server
1. Place the `backend` folder in your web server directory
2. Ensure PHP has write permissions to the `logs` directory
3. Update the `PHP_BACKEND_URL` in your frontend code

### Step 4: Test the Setup
1. Visit `http://your-domain/backend/setup.php`
2. Check all status indicators
3. Use the test form to send a test email

## 📁 File Structure

```
backend/
├── config.php              # Main configuration file
├── phpmailer.php           # PHPMailer implementation
├── emailHandler.php        # Email processing logic
├── processForm.php         # Main form processor
├── setup.php              # Setup and testing script
├── composer.json          # PHPMailer dependencies
├── logs/                  # Log files directory
│   ├── form_submissions.txt
│   ├── form_errors.txt
│   └── console.log
└── README.md             # This file
```

## 🔧 Configuration Options

### SMTP Settings
```php
define('SMTP_HOST', 'mail.luxuryandamans.com');
define('SMTP_PORT', 465);
define('SMTP_SECURE', 'ssl');
```

### Email Accounts
```php
define('INFO_EMAIL', 'info@luxuryandamans.com');
define('INFO_PASSWORD', 'Sumeet@26');
define('BOOKING_EMAIL', 'bookings@luxuryandamans.com');
define('BOOKING_PASSWORD', ''); // Set this!
define('ADMIN_EMAIL', 'xummeet1987@gmail.com');
```

## 📝 Usage

### Frontend Integration
Update your frontend email service to use the PHP backend:

```typescript
const PHP_BACKEND_URL = 'http://your-domain/backend/processForm.php';

const response = await fetch(PHP_BACKEND_URL, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData)
});
```

### Form Data Structure
The system accepts various form types:

```json
{
  "name": "Customer Name",
  "email": "customer@example.com",
  "phone": "+91 9876543210",
  "message": "Customer message",
  "destination": "Havelock Island",
  "guests": "2",
  "travel_date": "2024-03-15",
  "duration": "5",
  "preferred_contact": "email"
}
```

## 📊 Logging & Debugging

### Log Files
- `form_submissions.txt`: All successful form submissions
- `form_errors.txt`: Error logs and failed submissions
- `console.log`: Detailed debugging information

### Console Logging
The system provides extensive console logging:
```php
consoleLog("Message", $data); // Logs to both error_log and file
```

## 🎨 Email Templates

### Admin Notification Email
- Professional HTML template with company branding
- Includes all form data in organized sections
- Clear next steps for follow-up

### User Confirmation Email
- Welcome message with company branding
- Timeline of what happens next
- Contact information for immediate assistance
- Company value propositions

## 🔒 Security Features

- Input sanitization and validation
- Email format validation
- XSS protection with `htmlspecialchars()`
- CORS headers for frontend integration
- Error logging without exposing sensitive data

## 🚨 Troubleshooting

### Common Issues

1. **Emails not sending**
   - Check SMTP credentials in `config.php`
   - Verify server has `mail()` function enabled
   - Check logs for detailed error messages

2. **Permission errors**
   - Ensure web server can write to `logs` directory
   - Check file permissions (755 for directories, 644 for files)

3. **Frontend connection issues**
   - Verify `PHP_BACKEND_URL` is correct
   - Check CORS headers
   - Ensure PHP server is running

### Testing Commands
```bash
# Test PHP configuration
php -m | grep -i mail

# Check file permissions
ls -la logs/

# Test SMTP connection (if telnet available)
telnet mail.luxuryandamans.com 465
```

## 📈 Monitoring

### Success Metrics
- Check `form_submissions.txt` for successful submissions
- Monitor email delivery rates
- Review user feedback and response times

### Error Monitoring
- Regularly check `form_errors.txt`
- Monitor server error logs
- Set up alerts for critical failures

## 🔄 Backup & Recovery

### Automatic Backups
- All form submissions are automatically logged to text files
- Logs include timestamp and complete form data
- Files are append-only for data integrity

### Manual Backup
```bash
# Backup all logs
tar -czf email_logs_backup_$(date +%Y%m%d).tar.gz logs/
```

## 📞 Support

For technical support or questions:
- Email: info@luxuryandamans.com
- Check logs for detailed error information
- Review setup.php for configuration issues

---

**Created for Luxury Andamans Website**  
*Professional Email System with PHP & SMTP* 