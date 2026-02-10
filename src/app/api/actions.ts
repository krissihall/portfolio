'use server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmailAction(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;
  const phone = formData.get('phone') as string;
  const subject = formData.get('subject') as string;

  try {
    const { data, error } = await resend.emails.send({
      // from: 'Kristina L. Hall <klh.media09@gmail.com>', // Use your verified domain
      from: 'Acme <onboarding@resend.dev>',
      to: ['klh.media09@gmail.com'], // The recipient email
      subject: 'New Contact Form Submission',
      html: `<p><strong>Name</strong>: ${name}</p><p>Email: ${email}</p><p><strong>Phone</strong>: ${phone}</p><p><strong>Subject</strong>: ${subject}</p><p><strong>Message</strong>: ${message}</p>`,
    });

    if (error) {
      console.error(error);
      return { success: false, message: 'Failed to send email.' };
    }
    return { success: true, message: 'Email sent successfully!' };

  } catch (error) {
    console.error(error);
    return { success: false, message: 'An unexpected error occurred.' };
  }
}
