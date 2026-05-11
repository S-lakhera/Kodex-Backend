const express = require("express")
let cookieParser  = require("cookie-parser")
let userRoutes = require("./routes/userRoutes")
let postsRoutes = require("./routes/postsRoutes")


let app = express();

app.use(express.json())
app.use(cookieParser())
app.use("/api/users",userRoutes);
app.use("/api/posts",postsRoutes)

app.get("/", (req, res) => {
    res.send("Ok")
})

module.exports = app;
