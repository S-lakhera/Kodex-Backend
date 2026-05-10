require("dotenv").config()
const app = require('./src/app')
let port = process.env.PORT || 4000;
let connectDB = require("./src/config/database")

connectDB();


app.listen(port, (req,res) => {
    console.log(`Server is running on port ${port}`)
})