const express = require('express')

let app = express()
app.use(express.json())

let users = [] 

app.get("/", (req, res) => {
    res.send("I am express")
})

app.get("/users", (req, res) => {
    return res.status(200).json({
        message: "Users Fetched Successfully",
        users,
    })
})

app.post("/users", (req, res) => {

    users.push(req.body)

    return res.status(201).json({
        message: "User Created Successfully",
        users,
    })
})

app.patch("/users/:index", (req, res) => {
    let { index } = req.params;

    let { Name } = req.body;

    users[index].Name = Name;


    return res.status(200).json({
        message: "CHanges Saved.",
        users,
    })

})

app.delete("/users/:index", (req, res) => {  
    let { index } = req.params;

    if (index < users.length) {
        users.splice(index, 1)
        return res.status(200).json({
            message:"User Deleted Successfully..",
            users,
        })
    }
    else{
        return res.status(404).json({
            message:"User does not exist.",
            users,
        })
    }
})


module.exports = app;