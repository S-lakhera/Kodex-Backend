// const http = require('http') ;

// const server = http.createServer((req,res) => {
//     console.log("Server is created");
//     res.end("ok")
// })

// server.listen(3000,() => {
//     console.log("Server is listening at port 3000");
// })

let app = require("./src/app")
require('dotenv').config();
let connectDb = require("./src/config/db")

let port = 3000;
connectDb()

app.listen(port,(req,res) => {
    console.log(`Server is listening ${port}`);
})