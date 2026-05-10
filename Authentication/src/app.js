const express = require("express")
let userRoutes = require("./routes/userRoutes")

let app = express();

app.use(express.json())
app.use("/api/users",userRoutes);

app.get("/", (req, res) => {
    res.send("Ok")
})

module.exports = app;
