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

export const validateEnquiryInput = withValidationErrors([
  body('name')
    .notEmpty()
    .withMessage('Name is required')
    .isAlpha()
    .withMessage('Name must only contain alphabets'),
  body('email')
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Invalid email format'),
  body('phone').notEmpty().withMessage('Phone is required'),
  body('subject').notEmpty().withMessage('Subject is required'),
  body('message').notEmpty().withMessage('Message is required'),
])

export const validateQuotaInput = withValidationErrors([
  body('name')
    .notEmpty()
    .withMessage('Name is required')
    .isAlpha()
    .withMessage('Name must only contain alphabets'),
  body('email')
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Invalid email format'),
  body('phone').notEmpty().withMessage('Phone is required'),
  body('serviceSelection')
    .isIn(Object.values(SERVICE_SELECTION))
    .withMessage('Invalid service selection'),
  body('quantity')
    .notEmpty()
    .withMessage('Quantity is required')
    .isInt()
    .withMessage('Quantity must be a number'),
  body('budget')
    .optional({ nullable: false })
    .isInt()
    .withMessage('Please enter a valid budget amount'),
])
