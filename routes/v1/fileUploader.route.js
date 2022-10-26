
const express = require('express');
const fileUploadRouter = express.Router();

const { fileUpload } = require("../../controllers/file-uploader.controller");
const upload = require('../../middleware/uploader');


fileUploadRouter.route("/")
    .post(upload.single('picture1'), fileUpload)
    .get()

module.exports = fileUploadRouter;