// const http = require('http') ;

// const server = http.createServer((req,res) => {
//     console.log("Server is created");
//     res.end("ok")
// })

// server.listen(3000,() => {
//     console.log("Server is listening at port 3000");
// })

const express = require('express')

let app = express()

let users = [
    {
        name:"Sumit",
        email:"abc@gmail.com",
    },
    {
        name:"Sanam",
        email:"abc@gmail.com",
    },
    {
        name:"Arpit",
        email:"abc@gmail.com",
    },
]

app.get("/", (req,res) => {
    res.send("I am express")
})

app.get("/users", (req,res) => {
    return res.status(200).json({
        message:"Users Fetched Successfully",
        users,
    })
})

let port = 3000;

app.listen(port,(req,res) => {
    console.log(`Server is listening ${port}`);
})