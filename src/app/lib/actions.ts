'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  await resend.emails.send({
    from: 'Portfolio Contact <onboarding@resend.dev>',
    to: 'thomas.vantuycom33@gmail.com',
    subject: 'New portfolio contact response registered',
    html: `
      <h2>New response to contact form of protfolio</h2>
      <p>Email: ${email}</p>
      <p>Message:<br>${message}</p>
    `,
  });
}