import nodemailer from 'nodemailer'

const mailSender = async (email, subject, htmlContent) => {
    try{
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASSWORD
            } 
        })
        const mailOptions = {
            from : `Home2Work <${process.env.EMAIL}>`,
            to: email,
            subject: subject,
            html: htmlContent
        }

        const info = await transporter.sendMail(mailOptions)
        console.log(info)
    } catch (err){
        console.log(err.message)
        throw new Error(err.message)
    }
}

export default mailSender