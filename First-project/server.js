let app = require("./src/app")
require('dotenv').config();
let connectDb = require("./src/config/db")

let port = 3000;
connectDb()

app.listen(port,(req,res) => {
    console.log(`Server is listening ${port}`);
})