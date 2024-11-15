import { Router } from 'express'
const router = Router()
import { createEnquiry } from '../controllers/enquiryController.js'

router.route('/').post(createEnquiry)

export default router
