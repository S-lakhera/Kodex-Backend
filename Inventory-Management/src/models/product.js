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
    },
    category:{
        type:String,
        requied:true,
        default:"groccery"
    }
},{
    timestamps:true
})

const Product = mongoose.model("Product", productSchema)

module.exports = Product;