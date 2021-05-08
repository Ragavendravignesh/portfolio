import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import morgan from 'morgan'

dotenv.config()

connectDB()

const app = express()

app.use(express.json())

if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server is running at ${process.env.NODE_ENV} mode at port ${process.env.PORT}`
  )
)
