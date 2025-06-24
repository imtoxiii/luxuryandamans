import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

// Replace these with your EmailJS credentials
const SERVICE_ID = 'YOUR_SERVICE_ID';
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

interface EmailData {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  destination?: string;
  guests?: number;
  travel_date?: string;
  duration?: number;
  preferred_contact?: string;
}

export const sendEmail = async (data: EmailData) => {
  try {
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: data.name,
        from_email: data.email,
        phone: data.phone || 'Not provided',
        subject: data.subject || 'New Enquiry',
        message: data.message,
        destination: data.destination || 'Not specified',
        guests: data.guests || 'Not specified',
        travel_date: data.travel_date || 'Not specified',
        duration: data.duration || 'Not specified',
        preferred_contact: data.preferred_contact || 'Email'
      },
      PUBLIC_KEY
    );

    if (response.status === 200) {
      toast.success('Message sent successfully!');
      return true;
    } else {
      throw new Error('Failed to send message');
    }
  } catch (error) {
    console.error('Error sending email:', error);
    toast.error('Failed to send message. Please try again.');
    return false;
  }
};