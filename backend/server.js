import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import path from 'path'
import morgan from 'morgan'

import projectRoutes from './routes/projectRoutes.js'
import blogRoutes from './routes/blogRoutes.js'
import emailRoutes from './routes/emailRoutes.js'

import { errorHandler, notFound } from './middleware/errorMiddleware.js'

dotenv.config()

connectDB()

const app = express()

app.use(express.json())

if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

app.use('/api/projects', projectRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/mail', emailRoutes);

const __dirname = path.resolve()

if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname,'/client/build')))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname,'client','build','index.html'))
  })
} else {
  app.get('/', (req, res) => {
    res.send('API is running...')
  })
}

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server is running at ${process.env.NODE_ENV} mode at port ${process.env.PORT}`
  )
)
