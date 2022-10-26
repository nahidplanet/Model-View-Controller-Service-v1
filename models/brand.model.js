const mongoose = require("mongoose");
const validator = require('validator');
const { ObjectId } = mongoose.Schema.Types


const brandSchema = mongoose.Schema({
    products: [{
        type: ObjectId,
        ref: "Product"
    }],
    name: {
        type: String,
        trim: true,
        required: [true, "please provide a brand name"],
        maxLength: 100,
        unique: true,
        lowercase: true
    },
    description: String,
    email: {
        type: String,
        validate: [validator.isEmail, "please provide a valid email"],
        lowercase: true
    },
    website: {
        type: String,
        validate: [validator.isURL, "please provide a valid email"]
    },
    location: String,
   
    suppliers: {
        name: String,
        contactNumber: String,
        id: {
            type: ObjectId,
            ref: "Supplier"
        }
    },
    status: {
        type: String,
        enum: ["active", "inactive"],
        default: "active"
    }
},
    { timestamps: true }
)

const Brand = mongoose.model("Brand", brandSchema);
module.exports = Brand;