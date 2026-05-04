const express = require("express");
const productRoutes = require("./routes/product.js")

const app = express()
app.use(express.json())

app.use("/products",productRoutes)

app.get("/", (req, res) => {
    return res.status(200).json({
        message: "Server is running || Visit '/products' route for Inventory management"
    })
})


module.exports = app;