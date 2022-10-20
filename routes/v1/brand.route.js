const express = require('express');
const {
    getBrands,
    createBrand,
    updateBrandById,
    getBrandById
} = require('../../controllers/brand.controller');
const brandRoute = express.Router();


brandRoute.route("/")
    .get(getBrands)
    .post(createBrand)
    
brandRoute.route("/:id")
    .get(getBrandById)
    .patch(updateBrandById);

module.exports = brandRoute;
