import QuotaModel from '../models/QuotaModel.js'
import { StatusCodes } from 'http-status-codes'
import sendQuotaEmail from '../utils/sendQuotaEmail.js'

export const createQuota = async (req, res) => {
  const quota = await QuotaModel.create(req.body)

  // send email
  await sendQuotaEmail({
    name: quota.name,
    email: quota.email,
    phone: quota.phone,
    serviceSelection: quota.serviceSelection,
    quantity: quota.quantity,
    budget: quota?.budget,
  })
  res.status(StatusCodes.CREATED).json({ msg: 'Quota created', quota })
}
