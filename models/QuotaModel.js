import mongoose from 'mongoose'

const quotaSchema = new mongoose.Schema(
  {
    companyName: String,
    email: String,
    contactNo: String,
    subject: String,
    description: String,
  },
  { timestamps: true }
)

export default mongoose.model('Quota', quotaSchema)
