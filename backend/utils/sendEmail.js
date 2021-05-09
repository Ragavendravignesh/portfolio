import nodemailer from 'nodemailer'

const sendEmail = async (options) => {
    console.log(options.email, options.message)
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: true,
        auth: {
            user: process.env.SMTP_EMAIL,
            pass: process.env.SMTP_PASSWORD
        }
    });
    
    const message = {
        from: options.email,
        to: 'ragavendrabest77@gmail.com',
        subject: `Mail from Portfolio - ${options.email}`,
        text: options.message
    }
    
    const info = await transporter.sendMail(message)

    console.log(`Message Sent: ${info.messageId}`);
} 

export default sendEmail