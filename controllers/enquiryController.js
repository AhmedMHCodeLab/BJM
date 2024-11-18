import EnquiryModel from '../models/EnquiryModel.js'
import { StatusCodes } from 'http-status-codes'

export const createEnquiry = async (req, res) => {
  const enquiry = await EnquiryModel.create(req.body)
  res.status(StatusCodes.CREATED).json({ msg: 'Enquiry created', enquiry })
}
