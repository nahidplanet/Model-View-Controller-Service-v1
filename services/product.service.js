
const Product = require("../models/product.model");
const Brand = require("../models/brand.model");
// find all product 
module.exports.getProductService = async (queries) => {
    const products = await Product.find(queries.filter)
        .skip(queries.skip)
        .limit(queries.limit)
        .select(queries.field)
        .sort(queries.sort);

    const totalProduct = await Product.countDocuments(queries.filter);
    const totalPage = Math.ceil(totalProduct / queries.limit)
    return { totalProduct, totalPage, products };
}
// create a product 
module.exports.createProductService = async (data) => {
    const product = await Product.create(data);

    const {_id:productId,brand}=product;

    result = await Brand.updateOne(
        { _id: brand.id },
        {
            $push: { products: productId }
        })
    

console.log(result);

if (result.modifiedCount) {
    
}else{
    return product;

}

    // const product = new Product(data);
    // const result = await product.save();
    // return result;
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