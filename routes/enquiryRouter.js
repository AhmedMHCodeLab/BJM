import { Router } from 'express'
const router = Router()
import { createEnquiry } from '../controllers/enquiryController.js'
import { validateEnquiryInput } from '../middleware/validationMiddleware.js'

router.post('/', validateEnquiryInput, createEnquiry)

export default router
