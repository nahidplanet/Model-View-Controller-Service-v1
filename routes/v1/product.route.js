const express = require('express');
const {
    getProducts,
    createProduct,
    updateProduct,
    bulkUpdateProduct,
    deleteProductById,
    bulkDeleteProduct
} = require('../../controllers/product.controller');

const productRoute = express.Router();


productRoute.route("/")
    .get(getProducts)
    .post(createProduct)


productRoute.route("/bulk-update")
    .patch(bulkUpdateProduct)
    
productRoute.route("/bulk-delete")
    .delete(bulkDeleteProduct)

productRoute.route("/:id")
    .patch(updateProduct)
    .delete(deleteProductById)
module.exports = productRoute;