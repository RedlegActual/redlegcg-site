import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

// Initialize Resend with API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
    request: VercelRequest,
    response: VercelResponse
) {
    // 1. method validation
    if (request.method !== 'POST') {
        return response.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { name, email, businessType, message } = request.body;

        // 2. input validation
        if (!name || !email || !message) {
            return response.status(400).json({ error: 'Missing required fields' });
        }

        // 3. send email
        const data = await resend.emails.send({
            from: process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev',
            to: process.env.CONTACT_TO_EMAIL || 'contact@redlegcg.com',
            subject: `New Inquiry from ${name} (${businessType})`,
            html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Business Type:</strong> ${businessType}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
        });

        // 4. return success
        if (data.error) {
            console.error('Email sending failed:', data.error);
            return response.status(500).json({ error: 'Failed to send email' });
        }

        return response.status(200).json({ ok: true, id: data.data?.id });
    } catch (error) {
        // 5. robust error handling (no stack traces)
        console.error('Email sending failed:', error);
        return response.status(500).json({ error: 'Internal server error' });
    }
}
