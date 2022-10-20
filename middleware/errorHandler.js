
module.exports.errorHandler = (err, req, res, next) => {
     res.status(400).json({status:false,error:err.message})
    next();
}
