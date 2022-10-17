const express = require('express');
const { getProducts, createProduct } = require('../../controllers/product.controller');

const productRoute = express.Router();


productRoute.route("/")
    .get(getProducts)
    .post(createProduct)


productRoute.route("/:id").get().post()
module.exports = productRoute;