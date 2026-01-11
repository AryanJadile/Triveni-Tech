import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    try {
        const { name, email, message } = await req.json();

        if (!name || !email || !message) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // 1. Insert into Database
        const { error: dbError } = await supabase
            .from('contact_messages')
            .insert({
                name,
                email,
                message,
            });

        if (dbError) {
            console.error('DB Error:', dbError);
            return NextResponse.json({ error: 'Failed to save message' }, { status: 500 });
        }

        // 2. Send Email Notification via Resend
        const adminEmail = process.env.ADMIN_EMAIL;

        if (adminEmail) {
            console.log("Attempting to send contact email to:", adminEmail);
            const { data, error } = await resend.emails.send({
                from: 'Contact Form <onboarding@resend.dev>',
                to: adminEmail,
                replyTo: email,
                subject: `New Contact Message from ${name}`,
                html: `
                    <h1>New Contact Message</h1>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <hr/>
                    <h3>Message:</h3>
                    <p style="white-space: pre-wrap;">${message}</p>
                    <br/>
                    <p><em>This message was sent via the Triveni Tech website.</em></p>
                `,
            });

            if (error) {
                console.error("Resend API Error (Non-blocking):", error);
            } else {
                console.log("Email sent successfully:", data);
            }
        } else {
            console.warn("ADMIN_EMAIL is not configured.");
        }

        return NextResponse.json({ success: true, message: 'Message sent successfully' });

    } catch (error) {
        console.error('Server Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
