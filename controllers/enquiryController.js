import EnquiryModel from '../models/EnquiryModel.js'
import { StatusCodes } from 'http-status-codes'
import sendEnquiryEmail from '../utils/sendEnquiryEmail.js'

export const createEnquiry = async (req, res) => {
  const enquiry = await EnquiryModel.create(req.body)

  // send email
  await sendEnquiryEmail({
    name: enquiry.name,
    email: enquiry.email,
    phone: enquiry.phone,
    subject: enquiry.subject,
    message: enquiry.message,
  })
  res.status(StatusCodes.CREATED).json({ msg: 'Enquiry created', enquiry })
}
