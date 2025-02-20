import 'express-async-errors'
import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import morgan from 'morgan'
import mongoose from 'mongoose'
import cors from 'cors'
const app = express()

// routers
import quotaRouter from './routes/quotaRouter.js'

// middleware
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js'

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(cors())
app.use(express.json())

// routes
app.use('/api/v1/quota', quotaRouter)

// error handling
app.use('*', (req, res) => {
  res.status(404).json({ msg: 'not found' })
})

app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000

try {
  await mongoose.connect(process.env.MONGO_URI);
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
