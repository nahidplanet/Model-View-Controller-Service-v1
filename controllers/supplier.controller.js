const { getSuplliersService, createSuplliersService, updateSuplliersService } = require("../services/supplier.service");

module.exports.getSuplliers = async (req, res, next) => {
    try {
        const suppliers = await getSuplliersService();
        if (!suppliers) {
            res.status(400).json({ status: "fail", message: "supplier not found " });
        }
        res.status(200).json({ status: "success", result: suppliers });

    } catch (error) {
        next(error)
    }

}

// create 
module.exports.createSupplier = async (req, res, next) => {
    try {
        const supplierData = req.body
        const supplier = await createSuplliersService(supplierData);
        if (!supplier) {
            res.status(400).json({ status: "fail", message: "supplier not created " });
        }
        res.status(200).json({ status: "success", message: "supplier created successful" });

    } catch (error) {
        next(error)
    }

}
// update 
module.exports.updateSupplier = async (req, res, next) => {
    try {
        const { id } = req.params;
        const supplier = await updateSuplliersService(id, req.body);
        if (supplier.modifiedCount) {
            res.status(200).json({ status: "success", message: "supplier update successful" });
        } else {
            res.status(400).json({ status: "fail", message: "supplier not update " });
        }


    } catch (error) {
        next(error)
    }

}
