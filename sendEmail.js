// api/sendEmail.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        // Create a Nodemailer transporter object using SMTP transport
        let transporter = nodemailer.createTransport({
            service: 'gmail', // You can use other services like SMTP
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Extract form data
        const { name, email, message } = req.body;

        // Setup email data
        let mailOptions = {
            from: `"${name}" <${email}>`, // sender address
            to: 'recipient@example.com', // list of receivers
            subject: 'New Contact Form Submission', // Subject line
            text: message, // plain text body
        };

        try {
            // Send mail with defined transport object
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Email sent successfully.' });
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ message: 'Failed to send email.' });
        }
    } else {
        // Handle any non-POST requests
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

