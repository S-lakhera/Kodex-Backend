const { default: mongoose } = require("mongoose");

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    description: String,
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        default: 1
    }
},{
    timestamps:true
})

const Product = mongoose.model("Product", productSchema)

module.exports = Product;