const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const { logToFile } = require('./utils');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

// Email Transporter for main email (info@luxuryandamans.com)
const transporterInfo = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.INFO_EMAIL,
    pass: process.env.INFO_PASSWORD,
  },
});

// Email Transporter for user notification (bookings@luxuryandamans.com)
const transporterBooking = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.BOOKING_EMAIL,
    pass: process.env.BOOKING_PASSWORD,
  },
});

app.post('/send-email', async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Mail to admin
  const adminMailOptions = {
    from: process.env.INFO_EMAIL,
    to: process.env.ADMIN_EMAIL,
    subject: `New Enquiry from Website: ${subject}`,
    text: `You have a new enquiry from ${name} \u003c${email}\u003e\n\n${message}`,
  };

  // Mail to user
  const userMailOptions = {
    from: process.env.BOOKING_EMAIL,
    to: email,
    subject: 'Thank You for Your Enquiry',
    text: `Hi ${name},\n\nThank you for reaching out to Andaman Luxury. We have received your enquiry and will get back to you shortly.\n\nBest Regards,\nLuxury Andamans Team`,
  };

  try {
    // Send email to admin
    await transporterInfo.sendMail(adminMailOptions);

    // Send confirmation email to user
    await transporterBooking.sendMail(userMailOptions);

// Log data to text file as backup
    await logToFile('submissions.log', { name, email, subject, message });

    res.status(200).json({ message: 'Emails sent successfully!' });
  } catch (error) {
    console.error('Error sending emails:', error);
    res.status(500).json({ error: 'Failed to send emails' });
  }
});

app.listen(port, () => {
  console.log(`Email server running at http://localhost:${port}`);
});

