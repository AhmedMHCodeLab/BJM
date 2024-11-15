import { StatusCodes } from 'http-status-codes'

export const createEnquiry = async (req, res) => {
  res.status(StatusCodes.CREATED).json({ message: 'Enquiry created' })
}
