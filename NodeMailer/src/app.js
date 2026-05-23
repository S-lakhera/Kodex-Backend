const express = require('express')
const sendEmail = require('./services/mail.service')

let app = express()
app.use(express.json())

app.get("/", (req, res) => {
    return res.status(200)
        .json({
            message: "Hey there"
        })
})

app.post("/send-email", async (req, res) => {
    try {
        let { to } = req.body;
        const response = await sendEmail(to)

        return res.status(200).json({
            message: "Email sent",
            response,
            success: true,
        })
    } catch (error) {
        return res.status(500)
            .json({
                message: error.message
            })
    }
})

module.exports = app