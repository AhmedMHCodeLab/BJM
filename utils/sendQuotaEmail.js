import sendEmail from './sendEmail.js'

const sendQuotaEmail = async ({
  name,
  email,
  phone,
  serviceSelection,
  quantity,
  budget,
}) => {
  return sendEmail({
    from: email,
    subject: `New Quota: ${serviceSelection}`,
    html: `
                <p>Name: ${name}</p>
                <p>Email: ${email}</p>
                <p>Phone: ${phone}</p>
                <p>Service Selection: ${serviceSelection}</p>
                <p>Quantity: ${quantity}</p>
                ${budget ? `<p>Budget: ${budget}</p>` : ''}
            `,
  })
}

export default sendQuotaEmail
