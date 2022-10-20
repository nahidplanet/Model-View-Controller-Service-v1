const Category = require('../models/category.model');


// get all category 
module.exports.getCategorysService = async () => {
    const category = await Category.find();
    return category;
}

// create a category 
module.exports.createCategoryService = async (data) => {
    const category = await Category.create(data);
    return category;
}


// create a category 
module.exports.createCategoryService = async (data) => {
    const category = await Category.create(data);
    return category;
}
// get a category  by id

module.exports.getCategoryByIdService = async (id) => {
    const result = await Category.findById(id);
    return result;
}


// update a category  by id
module.exports.updateCategoryByIdService = async (id,data) => {
    const result = await Category.updateOne({_id:id},data,{
        runValidators:true
    });
    return result;
}