import type { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const msg = {
      to: 'your-email@domain.com',
      from: email,
      subject: 'New Message from Contact Form',
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    };

    await sgMail.send(msg);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
