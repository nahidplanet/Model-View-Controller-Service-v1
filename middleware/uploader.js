const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: "nahid-picture",
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniqueSuffix + '-' + file.originalname)
    }
})

const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        const supportedImage = /jpg|png/;
        const extention = path.extname(file.originalname);
        if (supportedImage.test(extention)) {
            cb(null, true);
        } else {
            cb(new Error("file name not right"))
        }
    },
    limits: {
        fileSize: 5000000,
    }
})


module.exports = upload;