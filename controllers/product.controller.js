
const {
    getProductService,
    createProductService,
    updateProductService,
    bulkUpdateProductService,
    deleteProductByIdService,
    bulkDeleteProductService
} = require("../services/product.service");

module.exports.getProducts = async (req, res, next) => {
    try {
        //const product = await Product.find({},).select({name:0});// sort({quantity:-1}); //.skip(1).limit(1); //$or:[{name:"chal"},{quantity:"10"}] //status:{$in:"out-of-Stock"}//quantity:{$gte:"10"}//name:{$in:["chal","dal"]}
        // const product = await Product
        // .where("name").equals(/\w/)
        // .where("quantity").gt(0).lt(25).select({_id:0}).skip(1).sort({quantity:1});

        const product = await getProductService();
        res.status(200).json({ status: true, data: product });
    } catch (error) {
        res.status(400).json({ status: false, error: error.message });
    }
}


// "save" or "create" for entry data to database 
module.exports.createProduct = async (req, res, next) => {
    try {

        // product.logger();
        const data = await createProductService(req.body);
        res.status(200).json({ status: true, message: "data added successful", data: data });
    } catch (error) {
        res.status(400).json({ status: false, error: error.message });
    }
}

// update a product
module.exports.updateProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await updateProductService(id, req.body);
        res.status(200).json({ status: "success", message: "data updated successful" });
    } catch (error) {
        res.status(400).json({ status: "fail", message: "do not update the product", error: error.message });
    }
}
//Bulk-update a product
module.exports.bulkUpdateProduct = async (req, res, next) => {
    try {
        const { updateProducts } = req.body;
        const result = await bulkUpdateProductService(updateProducts);
        res.status(200).json({ status: "success", message: "data updated successful" });
    } catch (error) {
        res.status(400).json({ status: "fail", message: "do not update the product", error: error.message });
    }
}
//delete a product
module.exports.deleteProductById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await deleteProductByIdService(id);
        if (!result.deletedCount) {
            res.status(400).json({ status: "fail", error: "the product can't deleted " });
        }
        res.status(200).json({ status: "success", message: "the product deleted successful" });
    } catch (error) {
        res.status(400).json({ status: "fail", message: "do not delete the product", error: error.message });
    }
}
//bulk delete a product
module.exports.bulkDeleteProduct = async (req, res, next) => {
    try {
        const { ids } = req.body;
        const result = await bulkDeleteProductService(ids);
        // if (!result.deletedCount) {
        //    await res.status(400).json({ status: "fail", error: "the product can't deleted " });
        // }
        res.status(200).json({ status: "success", message: "given products deleted successful" });
    } catch (error) {
        res.status(400).json({ status: "fail", message: "do not deleted given product", error: error.message });
    }
}