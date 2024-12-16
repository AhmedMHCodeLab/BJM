import sendEmail from './sendEmail.js'

const sendQuotaEmail = async ({
  companyName,
  email,
  contactNo,
  subject,
  description,
}) => {
  return sendEmail({
    from: email,
    subject: `Subject: ${subject}`,
    html: `
                <p>Company Name: ${companyName}</p>
                <p>Email: ${email}</p>
                <p>Contact No: ${contactNo}</p>
                <p>Description: ${description}</p>
            `,
  })
}

export default sendQuotaEmail
