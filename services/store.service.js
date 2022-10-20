const Store = require("../models/store.model")

// get all store 
module.exports.getStoreService = async () => {
    const result = await Store.find()
    return result;
}

// create a store 
module.exports.createStoreService = async (data) => {
    const createStore = Store(data);
    const result = await createStore.save();
    return result;
}
// get a store by id
module.exports.getStoreByIdService = async (id) => {
    const result = await Store.findById(id);
    return result;
}
// update a store by id
module.exports.updateStoreByIdService = async (id,data) => {
    const result = await Store.updateOne({_id:id},data,{
        runValidators:true
    });
    return result;
}