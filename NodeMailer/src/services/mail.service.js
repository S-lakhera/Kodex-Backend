const nodemailer = require('nodemailer')
// const resume = require('')

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
})

async function sendEmail(to) {
    try {
        const res = await transporter.sendMail({
            from: process.env.MAIL_USER,
            to,
            subject: "Learning Nodemailer",
            text: "Hello Tony Shashank this side , sending this mail from my node app ",
            attachments: [
                {
                    filename: "resume.pdf",
                    path: "./resume.pdf"
                }
            ]
        });
        console.log(res);
        return res;
    } catch (error) {
        throw error
    }
}

module.exports = sendEmail;