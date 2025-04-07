import 'express-async-errors'
import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import morgan from 'morgan'
import mongoose from 'mongoose'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'  // Add this import

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const app = express()

// middleware
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js'

// CORS with proper options
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))

// Request logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
} else {
  app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
  })
}

app.use(express.json())

// Add diagnostic endpoint
app.get('/api/debug', (req, res) => {
  const clientDistPath = path.resolve(__dirname, './client/dist')
  const indexPath = path.resolve(__dirname, './client/dist/index.html')
  
  res.json({
    env: process.env.NODE_ENV,
    paths: {
      dirname: __dirname,
      clientDistPath,
      indexPath
    },
    exists: {
      clientDist: fs.existsSync(clientDistPath),
      indexHtml: fs.existsSync(indexPath)
    }
  })
})

// IMPORTANT: Serve static files BEFORE API routes
app.use(express.static(path.resolve(__dirname, './client/dist')))

// routers
import quotaRouter from './routes/quotaRouter.js'
app.use('/api/v1/quota', quotaRouter)

// IMPORTANT: Catch-all route AFTER API routes
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/dist/index.html'))
})

app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000

try {
  await mongoose.connect(process.env.MONGO_URI)
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`)
  })
} catch (error) {
  console.log(error)
  process.exit(1)
}
