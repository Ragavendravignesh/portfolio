import express from 'express'
import { sendMailController } from '../controller/emailController.js'

const router = express.Router()

router.route('/').post(sendMailController);

export default router