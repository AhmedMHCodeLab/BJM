import 'express-async-errors'
import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import morgan from 'morgan'
import mongoose from 'mongoose'
import cors from 'cors'
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = fileURLToPath(new URL('.', import.meta.url));
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

// Serve frontend in production
if (process.env.NODE_ENV === 'production') {
  // Serve static files
  app.use(express.static(path.join(__dirname, 'client/dist')));
  
  // Handle React routing
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/dist/index.html'));
  });
} else {
  app.use('*', (req, res) => {
    res.status(404).json({ msg: 'not found' })
  });
}

// Serve static files from React app
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/dist')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/dist/index.html'));
  });
}

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
