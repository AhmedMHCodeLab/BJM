import mongoose from 'mongoose'
import { SERVICE_SELECTION } from '../utils/constants.js'

const quotaSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
    serviceSelection: {
      type: String,
      enum: Object.values(SERVICE_SELECTION),
      default: SERVICE_SELECTION.ENQUIRY,
    },
    quantity: Number,
    budget: Number,
  },
  { timestamps: true }
)

export default mongoose.model('Quota', quotaSchema)
