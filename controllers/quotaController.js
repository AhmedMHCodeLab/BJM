import QuotaModel from '../models/QuotaModel.js'
import { StatusCodes } from 'http-status-codes'
import sendQuotaEmail from '../utils/sendQuotaEmail.js'

export const createQuota = async (req, res) => {
  const quota = await QuotaModel.create(req.body)

  // send email
  await sendQuotaEmail({
    companyName: quota.companyName,
    email: quota.email,
    contactNo: quota.contactNo,
    subject: quota.subject,
    description: quota.description,
  })
  res.status(StatusCodes.CREATED).json({ msg: 'Quota created', quota })
}
