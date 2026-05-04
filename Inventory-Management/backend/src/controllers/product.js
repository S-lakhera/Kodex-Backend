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
        let { title, description, price, quantity, category } = req.body;

        if (!title) return res.status(400).json({
            message: "Title is mandatory"
        })
        else if (!price) return res.status(400).json({
            message: "Price is mandatory"
        })
        else if (!category) return res.status(400).json({
            message: "Category is mandatory"
        })

        let newProduct = new Product({
            title, description, price, quantity, category
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

        if (!product) {
            return res.status(404).json({
                message: "product not found"
            })
        }

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

        if (!product) {
            return res.status(404).json({
                message: "product not found to delete"
            })
        }

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
        let { title, description, price, quantity, category } = req.body;

        let updatedProduct = await Product.findByIdAndUpdate(id, {
            title, description, price, quantity, category 
        }, { new: true });

        if (!updatedProduct) {
            return res.status(404).json({
                message: "product not found to Update"
            })
        }

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