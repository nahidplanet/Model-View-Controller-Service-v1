
const express = require('express');
const cors = require('cors');
const productRoute = require('./routes/v1/product.route');

const app = express();

// middleware 
app.use(cors());
app.use(express.json());

app.use("/api/v1/product/", productRoute);

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
