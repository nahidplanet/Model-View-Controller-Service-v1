const {
    getBrandsService,
    createBrandService,
    updateBrandByIdService,
    getBrandByIdService
} = require("../services/brand.service");


// get all brands 
module.exports.getBrands = async (req, res, next) => {
    try {
        const brands = await getBrandsService();

        if (!brands) {
            res.status(400).json({ status: "fail", error: "brand could't found" })
        }
        res.status(200).json({ status: "success", data: brands });

    } catch (error) {
        next(error)
    }

}


// create a brands 
module.exports.createBrand = async (req, res, next) => {
    try {
        const result = await createBrandService(req.body);
        if (!result) {
            res.status(400).json({ status: "fail", error: "brand could't found" })
        }
        res.status(200).json({ status: "success", message: "Brand create successful" });
    } catch (error) {
        // next(error)
    }

}


// update a brands 
module.exports.updateBrandById = async (req, res, next) => {
    try {
        const {id} = req.params;
        
        const result = await updateBrandByIdService(id,req.body);
        if (!result) {
            res.status(400).json({ status: "fail", error: "brand could't update" })
        }
        if (!modifiedCount) {
            res.status(400).json({ status: "fail", error: "brand could't update" })
        }
        res.status(200).json({ status: "success", message: "Brand update successful" });
    } catch (error) {
        // next(error)
    }

}
// get a brands by ID 
module.exports.getBrandById = async (req, res, next) => {
    try {
        const {id} = req.params;
        
        const result = await getBrandByIdService(id);
        if (!result) {
            res.status(400).json({ status: "fail", error: "brand could't get by id" })
        }
        res.status(200).json({ status: "success", message: result });
    } catch (error) {
        // next(error)
    }

}