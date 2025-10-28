# Google SMTP Setup Guide for Contact Form

## ✅ What's Already Implemented

1. **API Route**: `/app/api/contact/route.ts` - Handles form submissions
2. **Updated Contact Form**: Form with proper state management and validation
3. **Nodemailer**: Installed for email functionality
4. **Email Templates**: Professional HTML email templates

## 🔧 Setup Steps

### 1. Create Gmail App Password

1. Go to your Google Account settings: https://myaccount.google.com/
2. Navigate to **Security** → **2-Step Verification** (enable if not already)
3. Go to **Security** → **App passwords**
4. Select **Mail** and **Other (Custom name)**
5. Enter "Global Pathways Contact Form"
6. Copy the generated 16-character password

### 2. Environment Variables

Create a `.env.local` file in your project root:

```env
# Gmail SMTP Configuration
GMAIL_USER=your-gmail@gmail.com
GMAIL_APP_PASSWORD=your-16-character-app-password

# Contact Email (where form submissions will be sent)
CONTACT_EMAIL=globalpathwaysinfobd@gmail.com
```

### 3. Update Your Gmail Credentials

Replace the placeholder values in `.env.local`:
- `your-gmail@gmail.com` → Your actual Gmail address
- `your-16-character-app-password` → The app password from step 1

## 📧 Email Features

### For You (Admin)
- **Subject**: "New Contact Form Submission from [Name]"
- **Content**: Professional HTML email with all form data
- **Includes**: Name, email, phone, message, timestamp

### For Users (Auto-Reply)
- **Subject**: "Thank you for contacting Global Pathways"
- **Content**: Professional confirmation email
- **Includes**: Message summary, contact info, office hours

## 🚀 Testing

1. Start your development server: `npm run dev`
2. Go to your contact form
3. Fill out and submit the form
4. Check your Gmail inbox for the admin email
5. Check the user's email for the confirmation

## 🔒 Security Features

- ✅ **Input Validation**: Required fields and email format
- ✅ **Error Handling**: Network and server error handling
- ✅ **Rate Limiting**: Built-in Next.js protection
- ✅ **Environment Variables**: Secure credential storage
- ✅ **HTML Sanitization**: Safe email content

## 📱 Form Features

- ✅ **Real-time Validation**: Client-side validation
- ✅ **Loading States**: "Sending..." button state
- ✅ **Success/Error Messages**: User feedback
- ✅ **Form Reset**: Clears form after successful submission
- ✅ **Responsive Design**: Works on all devices

## 🛠️ Troubleshooting

### Common Issues:

1. **"Authentication failed"**
   - Check your Gmail app password
   - Ensure 2FA is enabled on your Google account

2. **"Connection timeout"**
   - Check your internet connection
   - Verify Gmail SMTP settings

3. **"Invalid credentials"**
   - Double-check your Gmail address
   - Regenerate app password if needed

### Debug Steps:
1. Check browser console for errors
2. Check server logs in terminal
3. Verify environment variables are loaded
4. Test with a simple email first

## 📞 Support

If you need help with the setup:
1. Check the console for error messages
2. Verify all environment variables are set correctly
3. Test the Gmail app password manually
4. Ensure your Gmail account has 2FA enabled

## 🎯 Next Steps

After setup:
1. Test the contact form thoroughly
2. Customize email templates if needed
3. Set up email monitoring/alerts
4. Consider adding spam protection (reCAPTCHA)

---

**Note**: Keep your `.env.local` file secure and never commit it to version control!
