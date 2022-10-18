
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
module.exports.updateProductService = async (productId, data) => {
    // const results = await Product.updateOne({ _id: productId }, { $set: data }, { runValidators: true });

    const product = await Product.findById(productId);
    const results = await product.set(data).save();
    return results;
}
module.exports.bulkUpdateProductService = async (updateProducts) => {
    console.log(updateProducts);
    let products = [];
    updateProducts.forEach(product => {
        products.push(Product.updateOne({ _id: product.id }, product.data, { runValidators: true }));
    });
    const result = Promise.all(products);
    return result;
}
module.exports.deleteProductByIdService = async (id) => {
    const result = await Product.deleteOne({ _id: id })
    return result;
}
module.exports.bulkDeleteProductService = async (ids) => {
    const result = await Product.deleteMany({ _id: ids })
    return result;
}