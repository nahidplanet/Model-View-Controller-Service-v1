const mongoose = require("mongoose");
const validator = require('validator');


const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "please provide a category name"],
        trim: true,//blank space remove
        maxLength: [100, "name is too large"],
        lowercase: true,
    },
    description:String,
    imageUrl:{
        type:String,
        required:true,
        validate: [validator.isURL,"please provide a valid url"]
    }
},{
    timestamps:true,
})

const Category = mongoose.model("Category", categorySchema);


module.exports = Category;