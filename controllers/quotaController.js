import QuotaModel from '../models/QuotaModel.js'
import { StatusCodes } from 'http-status-codes'

export const createQuota = async (req, res) => {
  const quota = await QuotaModel.create(req.body)
  res.status(StatusCodes.CREATED).json({ msg: 'Quota created', quota })
}
