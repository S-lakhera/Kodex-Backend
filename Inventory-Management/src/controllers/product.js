const Product = require("../models/product");


//Get All Products
let getProducts = async (req, res) => {
    try {
        let products = await Product.find();

        return res.status(200).json({
            message: "Products Fetched Successfully",
            products
        })
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            message: "internal server error"
        })
    }
}

// Product creation
let createProduct = async (req, res) => {

    try {
        let { title, description, price, quantity } = req.body;

        let newProduct = new Product({
            title, description, price, quantity
        })

        let savedProduct = await newProduct.save();
        return res.status(201).json({
            message: "Product Created successfully.",
            product: savedProduct
        })

    } catch (e) {
        console.log(e);
        return res.status(500).json({
            message: "internal server error"
        })
    }
}

let getSingleProduct = async (req, res) => {

    try {
        let { id } = req.params;
        let product = await Product.findById(id);

        return res.status(200).json({
            message: "Product Fetched Successfully",
            product
        })
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            message: "internal server error"
        })
    }

}

let deleteProduct = async (req, res) => {
    try {
        let { id } = req.params;
        let product = await Product.findByIdAndDelete(id);

        return res.status(200).json({
            message: "Product deleted Successfully",
            product
        })
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            message: "internal server error"
        })
    }
}

let updateProduct = async (req, res) => {
    try {
        let { id } = req.params;
        console.log(req.body);

        let updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });

        return res.status(200).json({
            message: "Product Updated Successfully",
            product: updatedProduct
        })
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            message: "internal server error"
        })
    }
}


module.exports = { createProduct, getProducts, getSingleProduct, deleteProduct, updateProduct }