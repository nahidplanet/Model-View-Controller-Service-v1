const { updateOne } = require("../models/brand.model");
const Brand = require("../models/brand.model")

// get all brands 
module.exports.getBrandsService = async () => {
    const result = await Brand.find().populate("products");
    return result;
}


// create all brands 
module.exports.createBrandService = async (data) => {
    const brandCreate = new Brand(data);
    const result = await brandCreate.save();
    return result;
}


// update a brands 
module.exports.updateBrandByIdService = async (id, data) => {
    const result = await Brand.updateOne({ _id: id }, data, {
        runValidators: true
    });
    return result;
}

// get a brands by ID
module.exports.getBrandByIdService = async (id) => {
    const result = await Brand.findById({ _id: id });
    return result;
}