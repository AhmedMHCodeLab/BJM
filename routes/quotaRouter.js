import { Router } from 'express'
const router = Router()
import { createQuota } from '../controllers/quotaController.js'
import { validateQuotaInput } from '../middleware/validationMiddleware.js'

router.post('/', validateQuotaInput, createQuota)

export default router
