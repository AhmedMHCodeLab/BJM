import sendEmail from './sendEmail.js'

const sendEnquiryEmail = async ({ name, email, phone, subject, message }) => {
  return sendEmail({
    from: email,
    subject: `New Enquiry: ${subject}`,
    html: `
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <p>Message: ${message}</p>
        `,
  })
}

export default sendEnquiryEmail
