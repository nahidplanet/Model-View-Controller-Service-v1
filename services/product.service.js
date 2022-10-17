const Product = require("../models/product.model");

module.exports.getProductService = async () => {
    const products = await Product.find({});
    return products;
}
module.exports.createProductService = async (data) => {
    const product = new Product(data);
    const result = await product.save();
    return result;
}