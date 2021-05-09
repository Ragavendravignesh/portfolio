import asyncHandler from 'express-async-handler'
import sendEmail from '../utils/sendEmail.js'

export const sendMailController = asyncHandler(async (req, res) => {
    const {email, message} = req.body;

    try {
        await sendEmail({
            email,
            message
        })

        res.status(200).json({message: 'Message Sent.'})
    } catch (error) {
        res.status(401)
        throw new Error('Sorry not able to send mail')
    }
});