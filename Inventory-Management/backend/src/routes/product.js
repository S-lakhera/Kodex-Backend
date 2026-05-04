const express = require("express")
const router = express.Router();
const { createProduct, getProducts, getSingleProduct, deleteProduct, updateProduct } = require("../controllers/product");


router
    .route("/")
    .get(getProducts)
    .post(createProduct)


router
    .route("/:id")
    .get(getSingleProduct)
    .delete(deleteProduct)
    .put(updateProduct)


module.exports = router