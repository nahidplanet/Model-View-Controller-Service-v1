const Supplier = require("../models/supplier.model")

module.exports.getSuplliersService = async () =>{
    const suppliers = await Supplier.find().populate('brand.id');
    return suppliers;
}
// create 
module.exports.createSuplliersService = async (data) =>{
    const suppliers = await Supplier.create(data);
    return suppliers;
}
// update 
module.exports.updateSuplliersService = async (id,data) =>{
    const suppliers = await Supplier.updateOne({_id:id},data);
    return suppliers;
}