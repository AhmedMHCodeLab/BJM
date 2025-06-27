import nodemailer from 'nodemailer';
import nodemailerConfig from './nodemailerConfig.js';

const transporter = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async ({ senderEmail, subject, html }) => {
  // Validate or sanitize senderEmail before this point
  return transporter.sendMail({
    from: 'info@bjmafrica.com',    // must match authenticated user
    replyTo: senderEmail,          // directs replies to the form user
    to: 'info@bjmafrica.com',      // destination inbox
    subject,
    html,
  });
};

export default sendEmail;
