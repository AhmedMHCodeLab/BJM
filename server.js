import 'express-async-errors'
import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import morgan from 'morgan'
const app = express()

// routers
import enquiryRouter from './routes/enquiryRouter.js'

// middleware
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js'

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}
app.use(express.json())

app.use('*', (req, res) => {
  res.status(404).json({ msg: 'not found' })
})

app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000

app.use('/api/v1/enquiry', enquiryRouter)

try {
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`)
  })
} catch (error) {
  console.log(error)
  process.exit(1)
}
