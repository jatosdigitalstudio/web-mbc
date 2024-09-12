import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'    

const EMAIL_MBC = "general@mitrabhardaconsulting.com"

const transporter = nodemailer.createTransport({
    service: process.env.MAIL_SERVICE,
    host: process.env.MAIL_HOST,
    port: Number(process.env.MAIL_PORT) || 0,
    secure : true,
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
  });
  

export async function POST(request) {
    const body = await request.json();
    const { name, email, phone, message } = body;

    const sendEmailToResetPassword = async () => {

    const output = `
        <div style="background-color: white;padding: 1rem; max-width: 40rem;margin: auto;">
            <p style="font-size:16px;text-align:center">Halo MBC, ada pesan masuk</p>
            <br />
            <p style="font-size:16px;text-align:center">Nama : ${name}</p>
            <p style="font-size:16px;text-align:center">Email : ${email}</p>
            <p style="font-size:16px;text-align:center">Phone : ${phone}</p>
            <p style="font-size:16px;text-align:center">Message : ${message}</p>
            <br />
        </div>
        <hr>
    `;
  
    const emailData = {
      from: '"Website MBC" <jatosajibuana@gmail.com>',
      to: email,
      subject: 'Message from Website',
      html: output,
    };
  
    try {
      await transporter.sendMail(emailData);
    } catch (error) {
      console.error('Failed to send email:', error);
      throw error
    }
  };

  await sendEmailToResetPassword()

  return new NextResponse('Send email to reset password success', {status: 200});
}

