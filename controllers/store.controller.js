const {
    getStoreService,
    createStoreService,
    getStoreByIdService,
    updateStoreByIdService
} = require("../services/store.service");


// get stors 
module.exports.getStore = async (req, res, next) => {
    try {
        const result = await getStoreService();
        if (!result) {
            res.status(400)
                .json({
                    status: "fail",
                    message: "store could't Found"
                })
        }
        res.status(200)
            .json({
                status: "success",
                data: result
            })
    } catch (error) {
        next(error)
    }
}


// create  a stor
module.exports.createStore = async (req, res, next) => {
    try {
        const result = await createStoreService(req.body);
        if (!result) {
            res.status(400).json({ status: "fail", message: "store could't create" })
        }
        res.status(200).json({ status: "success", message: "store created successful" })
    } catch (error) {
        next(error)
    }
}

// get a stor id
module.exports.getStoreById = async (req, res, next) => {
    try {
        const { id } = req.params;

        const result = await getStoreByIdService(id);
        if (!result) {
            res.status(400).json({ status: "fail", message: "store could't found by id" })
        }
        res.status(200).json({ status: "success", data: result })
    } catch (error) {
        next(error)
    }
}

// update a stor by id
module.exports.updateStoreById = async (req, res, next) => {
    try {
        const { id } = req.params;

        const result = await updateStoreByIdService(id, req.body);
        if (!result) {
            res.status(400).json({ status: "fail", message: "store could't updated by id" })
        }
        res.status(200).json({ status: "success", message: "store updated successful given by id" })
    } catch (error) {
        next(error)
    }
}