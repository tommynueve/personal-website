import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

let transporter = nodemailer.createTransport({
  service: 'Hotmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PW,
  },
});

let mailOptions = {
  from: process.env.EMAIL,
  to: process.env.EMAIL,
  subject: 'Personal Website Form Contact',
  text: 'Plaintext version of the message',
  html: '<p>HTML version of the message</p>',
};

const buildEmail = (name: string, email: string, message: string): typeof mailOptions => {
  const emailBodyText = `From: ${email}\nName: ${name}\nMessage: ${message}`;
  const emailBodyHTML = `<p>From: ${email}</p><p>Name: ${name}</p><p>Message: ${message}</p>`;
  return { ...mailOptions, text: emailBodyText, html: emailBodyHTML };
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).send('Invalid method.');
  const { name, email, message } = req.body;
  try {
    const emailTransaction = await transporter.sendMail(buildEmail(name, email, message));
    console.log('Email successfully sent from: ', emailTransaction.messageId);
  } catch (e) {
    console.error('Error sending email: ', e);
    return res.status(503).send('Error sending email.');
  }
  return res.status(200).send('Email successfully sent.');
}
