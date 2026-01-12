import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { Resend } from 'resend';

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * Internship Application API Handler
 * 
 * Handles POST requests for internship applications.
 * 1. Parses FormData (includes file upload).
 * 2. Uploads resume to Supabase Storage.
 * 3. Saves application details to Supabase Database.
 * 4. Sends an email notification to the admin via Resend.
 * 
 * @param req - The incoming request object containing form data.
 * @returns JSON response indicating success or failure.
 */
export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const phone = formData.get('phone') as string;
        const college = formData.get('college') as string;
        const domain = formData.get('domain') as string;
        const coverLetter = formData.get('cover_letter') as string;
        const resumeFile = formData.get('resume') as File;

        // Validate all required fields
        if (!name || !email || !phone || !college || !domain || !resumeFile) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // 1. Upload Resume to Supabase Storage
        // Generate a unique filename to prevent overwrites
        const fileExt = resumeFile.name.split('.').pop();
        const fileName = `${Date.now()}_${name.replace(/\s+/g, '_')}.${fileExt}`;

        const { data: uploadData, error: uploadError } = await supabase.storage
            .from('resumes')
            .upload(fileName, resumeFile);

        if (uploadError) {
            console.error('Upload Error:', uploadError);
            return NextResponse.json({ error: 'Failed to upload resume' }, { status: 500 });
        }

        // Get Public URL for the uploaded resume
        const { data: { publicUrl } } = supabase.storage
            .from('resumes')
            .getPublicUrl(fileName);

        // 2. Insert Application Data into Database
        const { error: dbError } = await supabase
            .from('internship_applications')
            .insert({
                name,
                email,
                phone,
                college,
                domain,
                cover_letter: coverLetter,
                resume_url: publicUrl,
            });

        if (dbError) {
            console.error('DB Error:', dbError);
            return NextResponse.json({ error: 'Failed to save application' }, { status: 500 });
        }

        // 3. Send Email Notification via Resend
        const adminEmail = process.env.ADMIN_EMAIL;

        if (adminEmail) {
            console.log("Attempting to send email to:", adminEmail);

            // Send email notification
            const { data, error } = await resend.emails.send({
                from: 'Internship Applications <onboarding@resend.dev>', // Use verified domain in production
                to: adminEmail,
                subject: `New Internship Application: ${name} (${domain})`,
                html: `
                    <h1>New Internship Application Received</h1>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone}</p>
                    <p><strong>College:</strong> ${college}</p>
                    <p><strong>Domain:</strong> ${domain}</p>
                    <p><strong>Cover Letter:</strong></p>
                    <p style="white-space: pre-wrap;">${coverLetter || "N/A"}</p>
                    <p><strong>Resume:</strong> <a href="${publicUrl}">Download Resume</a></p>
                    <br/>
                    <p><em>This application was submitted via the Triveni Tech website.</em></p>
                `,
            });

            if (error) {
                console.error("Resend API Error (Non-blocking):", error);
                // Continue execution even if email fails, so data is saved.
            } else {
                console.log("Email sent successfully:", data);
            }
        } else {
            console.warn("ADMIN_EMAIL is not configured.");
        }

        return NextResponse.json({ success: true, message: 'Application submitted successfully' });

    } catch (error) {
        console.error('Server Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
