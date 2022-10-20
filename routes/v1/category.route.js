const express = require('express');
const {
    getCategorys,
    createCategory,
    getCategoryById,
    updateCategoryById
} = require('../../controllers/category.controller');


const categoryRoute = express.Router();

categoryRoute.route("/")
    .get(getCategorys)
    .post(createCategory)

    
categoryRoute.route("/:id")
    .get(getCategoryById)
    .patch(updateCategoryById)






module.exports = categoryRoute;