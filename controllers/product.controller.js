
const { getProductService, createProductService } = require("../services/product.service");

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