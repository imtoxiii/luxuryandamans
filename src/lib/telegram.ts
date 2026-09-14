
import toast from 'react-hot-toast';

// Helper to escape HTML characters to prevent Telegram API errors
const escapeHtml = (unsafe: any): string => {
    if (typeof unsafe !== 'string') return String(unsafe || '');
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
};


export const sendTelegramMessage = async (message: string): Promise<boolean> => {
    // Use environment variables for security
    const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID || '1336330730';

    if (!TELEGRAM_BOT_TOKEN) {
        console.error('❌ Telegram Bot Token is missing in environment variables');
        toast.error('Configuration error: Bot token missing');
        return false;
    }

    const text = message.trim();
    console.log('📤 Sending Telegram message...');

    let status = 'failed';
    let apiResponse = null;

    try {
        const send = async (parseMode?: 'HTML') => {
            const body: Record<string, string> = {
                chat_id: String(TELEGRAM_CHAT_ID),
                text,
            };
            if (parseMode) body.parse_mode = parseMode;

            return fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });
        };

        let response = await send('HTML');
        let data = await response.json();
        apiResponse = data;

        // Retry as plain text if HTML parse fails
        if (!data.ok && String(data.description || '').toLowerCase().includes('parse')) {
            console.warn('⚠️ Telegram HTML parse failed, retrying as plain text');
            response = await send();
            data = await response.json();
            apiResponse = data;
        }

        if (data.ok) {
            console.log('✅ Telegram message sent successfully');
            status = 'success';
        } else {
            console.error('❌ Telegram API Error:', data);
            toast.error('Unable to send enquiry. Please try again later.');
        }

        // Backup Logging to Server Text File (PHP)
        try {
            // We use a relative path assuming the PHP file is at the root of the site (public folder)
            // In production, this will be https://yourdomain.com/save_telegram_log.php
            const logResponse = await fetch('/save_telegram_log.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: text,
                    status: status,
                    metadata: apiResponse
                })
            });
            
            if (logResponse.ok) {
                console.log('💾 Message backed up to server text file');
            } else {
                console.warn('⚠️ Failed to back up log to server file');
            }
        } catch (logErr) {
            console.error('⚠️ Error participating in backup logging:', logErr);
        }

        return data.ok;

    } catch (error) {
        console.error('❌ Network Error sending Telegram message:', error);
        toast.error('Network error. Please check your connection and try again.');
        
        // Attempt to log failure if possible
        try {
             await fetch('/save_telegram_log.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: text,
                    status: 'network_error',
                    metadata: { error: String(error) }
                })
            });
        } catch (e) { /* ignore */ }

        return false;
    }
};

export const formatBookingMessage = (data: any): string => {
    const {
        name,
        email,
        phone,
        destination,
        guests,
        travelDate,
        duration,
        message,
        preferredContact,
        packageName,
        totalPrice,
        supplements,
        selectedActivities
    } = data;

    return `
<b>🆕 New Booking Enquiry</b>

<b>👤 Customer Details</b>
<b>Name:</b> ${escapeHtml(name)}
<b>Email:</b> ${escapeHtml(email)}
<b>Phone:</b> ${escapeHtml(phone)}
<b>Preferred Contact:</b> ${escapeHtml(preferredContact)}

<b>✈️ Trip Details</b>
<b>Destination:</b> ${escapeHtml(destination)}
<b>Guests:</b> ${escapeHtml(guests)}
<b>Travel Date:</b> ${escapeHtml(travelDate)}
<b>Duration:</b> ${escapeHtml(duration)} days

${packageName ? `
<b>📦 Package Details</b>
<b>Package:</b> ${escapeHtml(packageName)}
<b>Total Price:</b> ₹${totalPrice?.toLocaleString()}
${supplements?.length ? `<b>Add-ons:</b> ${supplements.map(escapeHtml).join(', ')}` : ''}
${selectedActivities?.length ? `<b>Activities:</b> ${selectedActivities.map(escapeHtml).join(', ')}` : ''}
` : ''}

<b>💬 Message</b>
${escapeHtml(message)}
  `;
};

export const formatContactMessage = (data: any): string => {
    const { name, email, phone, subject, message } = data;

    return `
<b>📬 New Contact Message</b>

<b>👤 Sender Details</b>
<b>Name:</b> ${escapeHtml(name)}
<b>Phone:</b> ${escapeHtml(phone)}
<b>Email:</b> ${escapeHtml(email || 'Not provided')}

<b>📝 Message Details</b>
<b>Subject:</b> ${escapeHtml(subject)}
<b>Message:</b>
${escapeHtml(message)}
  `;
};

export const formatPersonalizedTourMessage = (data: {
    name: string;
    email?: string;
    phone: string;
}): string => {
    const { name, email, phone } = data;

    return [
        '<b>🏝️ Personalized Tour Package Enquiry</b>',
        '',
        '<b>👤 Customer Details</b>',
        `<b>Name:</b> ${escapeHtml(name)}`,
        `<b>Email:</b> ${escapeHtml(email?.trim() || 'Not provided')}`,
        `<b>Phone:</b> ${escapeHtml(phone)}`,
        '',
        '<b>📝 Source:</b> Lead popup (auto-show / sticker)',
    ].join('\n');
};

export const formatBestPackageMessage = (data: {
    name: string;
    email?: string;
    phone: string;
    packageName?: string;
    packagePrice?: number;
    city?: string;
}): string => {
    const { name, email, phone, packageName, packagePrice, city } = data;

    return [
        '<b>✨ Get Best Package Enquiry</b>',
        '',
        '<b>👤 Customer Details</b>',
        `<b>Name:</b> ${escapeHtml(name)}`,
        `<b>Phone:</b> ${escapeHtml(phone)}`,
        `<b>Email:</b> ${escapeHtml(email?.trim() || 'Not provided')}`,
        '',
        packageName
            ? [
                '<b>📦 Interested Package</b>',
                `<b>Package:</b> ${escapeHtml(packageName)}`,
                packagePrice != null ? `<b>Offer Price:</b> ₹${packagePrice.toLocaleString('en-IN')}/person` : '',
              ].filter(Boolean).join('\n')
            : '',
        city ? `<b>City:</b> ${escapeHtml(city)}` : '',
        '',
        '<b>📝 Source:</b> Offers page — Get Best Package',
    ].filter((line) => line !== undefined).join('\n');
};

export const formatCalculatorMessage = (data: any): string => {
    const {
        name,
        email,
        phone,
        selectedDestinationNames,
        travelers,
        duration,
        accommodationTier,
        mealPlan,
        tourType,
        selectedActivities,
        includeFlights,
        includeInsurance,
        totalCost,
        breakdown
    } = data;

    const breakdownText = breakdown && breakdown.length > 0
        ? breakdown.map((item: any) => `• ${escapeHtml(item.category)}: ₹${Math.round(item.amount).toLocaleString()}`).join('\n')
        : 'No breakdown available';

    return `
<b>🧮 New Custom Trip Estimate</b>

<b>👤 Customer Details</b>
<b>Name:</b> ${escapeHtml(name)}
<b>Email:</b> ${escapeHtml(email)}
<b>Phone:</b> ${escapeHtml(phone || 'Not provided')}

<b>✈️ Trip Configuration</b>
<b>Destinations:</b> ${selectedDestinationNames?.map(escapeHtml).join(', ') || 'None'}
<b>Travelers:</b> ${escapeHtml(travelers)}
<b>Duration:</b> ${escapeHtml(duration)} days
<b>Accommodation:</b> ${escapeHtml(accommodationTier)}
<b>Meal Plan:</b> ${escapeHtml(mealPlan)}
<b>Tour Type:</b> ${escapeHtml(tourType)}

<b>🎯 Activities & Extras</b>
<b>Activities:</b> ${selectedActivities?.length ? selectedActivities.length : 'None'}
<b>Flights:</b> ${includeFlights ? '✅ Yes' : '❌ No'}
<b>Insurance:</b> ${includeInsurance ? '✅ Yes' : '❌ No'}

<b>💰 Cost Estimation</b>
<b>Total Estimate:</b> ₹${Math.round(totalCost).toLocaleString()}

<b>📊 Cost Breakdown</b>
${breakdownText}
  `;
};
