module.exports.errorHandler = function (err, req, res, next) {
    
    res.status(500).json({ error: err });
}