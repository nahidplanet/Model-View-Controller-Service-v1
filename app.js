const multer = require('multer');
const express = require('express');
const cors = require('cors');
const productRoute = require('./routes/v1/product.route');
const brandRoute = require('./routes/v1/brand.route');
const storeRoute = require('./routes/v1/store.route');
const categoryRoute = require('./routes/v1/category.route');
const upload = require('./middleware/uploader');
const fileUploadRouter = require('./routes/v1/fileUploader.route');
const supplierRouoter = require('./routes/v1/supplier.route');

const app = express();

// middleware 
app.use(cors());
app.use(express.json());

app.use("/api/v1/product/", productRoute);
app.use("/api/v1/brand/", brandRoute);
app.use("/api/v1/category/", categoryRoute);
app.use("/api/v1/store/", storeRoute);
app.use("/api/v1/file-upload/", fileUploadRouter);
app.use("/api/v1/supplier/", supplierRouoter);


// route 


app.get("/", (req, res, next) => {
    console.log("home page");
    res.send("this is home page")
})




app.get("*", (req, res, next) => {
    res.send("Route Not Found");
})

// export to server.js 
module.exports = app;
