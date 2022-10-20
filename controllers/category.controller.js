
const {
    getCategorysService, 
    createCategoryService, 
    getCategoryByIdService, 
    updateCategoryByIdService
}= require("../services/category.service");


// get all category 
module.exports.getCategorys = async (req, res, next) => {
    try {
        const result = await getCategorysService();
        if (!result) {
            res.status(400).json({ status: "fail", message: "category could't found" })
        }
        res.status(200).json({ status: "success", data: result })
    } catch (error) {
        next(error);
    }
}


// create a category 
module.exports.createCategory = async (req, res, next) => {
    try {
        const result = await createCategoryService(req.body);
        if (!result) {
            res.status(400).json({ status: "fail", message: "category could't created" });
        }
        res.status(200).json({ status: "success", message: "category created successFull" });
    } catch (error) {
        next(error);
    }
}



// get a category  by id
module.exports.getCategoryById = async (req, res, next) => {
    try {
        const { id } = req.params
        const result = await getCategoryByIdService(id);
        if (!result) {
            res.status(400).json({ status: "fail", message: "category could't Found by given id" });
        }
        res.status(200).json({ status: "success", data:result});
    } catch (error) {
        next(error);
    }
}




// update a category  by id
module.exports.updateCategoryById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await updateCategoryByIdService(id,req.body);
        if (!result) {
            res.status(400).json({ status: "fail", message: "category could't update by given id" });
        }
        res.status(200).json({ status: "success", message:"category successful updated by given id"});
    } catch (error) {
        next(error);
    }
}