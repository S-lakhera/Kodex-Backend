const express = require("express");
const productRoutes = require("./routes/product.js")
const cors = require('cors')



const app = express()
app.use(express.json())
app.use(cors({
    origin:'http://localhost:5173'
}))

app.use("/products",productRoutes)

app.get("/", (req, res) => {
    return res.status(200).json({
        message: "Server is running || Visit '/products' route for Inventory management"
    })
})


module.exports = app;