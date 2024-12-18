import { body, validationResult } from 'express-validator'
import { BadRequestError } from '../errors/customErrors.js'
import { SERVICE_SELECTION } from '../utils/constants.js'

const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg)
        throw new BadRequestError(errorMessages)
      }
      next()
    },
  ]
}

export const validateQuotaInput = withValidationErrors([
  body('companyName')
    .notEmpty()
    .withMessage('Company Name is required')
    .isAlphanumeric()
    .withMessage('Company Name must be alphanumeric'),
  body('email')
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Invalid email format'),
  body('contactNo')
    .notEmpty()
    .withMessage('Contact Number is required')
    .isMobilePhone()
    .withMessage('Invalid contact number'),
  body('subject')
    .notEmpty()
    .withMessage('Subject is required')
    .isLength({ max: 20 })
    .withMessage('Subject is too long'),
  body('description').notEmpty().withMessage('Description is required'),
])
