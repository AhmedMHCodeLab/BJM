import nodemailer from 'nodemailer'
import nodemailerConfig from './nodemailerConfig.js'

const transporter = nodemailer.createTransport(nodemailerConfig)

const sendEmail = async ({ from, subject, html }) => {
  return transporter.sendMail({
    from, // sender address
    to: 'thad.kessler@ethereal.email', // list of receivers
    subject, // Subject line
    html, // html body
  })
}

export default sendEmail
