const mongoose = require('mongoose');
const validator = require('validator');
const {ObjectId} = mongoose.Schema.Types
const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "please provide a product name"],
        trim: true,//blank space remove
        minLength: [3, "length must be at least 3 character. "],
        maxLength: [100, "name is too large"],
        lowercase: true

    },
    description: {
        type: String,
        required: true,

    },
    unit: {
        type: String,
        required: true,
        enum: {
            values: ["kg", "pcs", "liter", "bag"],
            message: "unite values can't be {values}. must be kg/pcs/liter/bag "
        }
    },
    quantity: {
        type: Number,
        required: [true, "quantity is require"],
        min: [0, "quantity can't be negative "],
        validate: {
            validator: (value) => {
                isInteger = Number.isInteger(value)
                if (isInteger) {
                    return true;
                } else {
                    return false;
                }
            },
            message: "quantity must be a number"
        }
    },
    status: {
        type: String,
        required: [true, "status is require"],
        enum: ["in-Stock", "out-of-Stock", "discontinued"],
        lowercase: true
    },
    imageUrl: {
        type: String,
        required: true,
        validate: [
            {
                validator: (value) => {
                    let urls = [];
                    if (!Array.isArray(value)) {
                        return false;
                    }
                    let isValid = true;
                    value.forEach((url) => {
                        if (!validator.isURL(url)) {
                            return isValid = false;
                        }
                    })
                    return isValid;
                },
                message: "please valid image url"
            }
        ]
    },
    category: {
        type: String,
        required: true,
    },
    brand: {
        name: {
            type: String,
            required: true
        },
        id: {
            type: ObjectId,
            ref: "Brand",
            required: true,
        }
    }
}, {
    timestamps: true,
    // _id: true or false 
});


// don't use arrow function 
// mongoose middleware // must be normal function
// =============================================
// productSchema.pre('save', function (next) {
//     if (this.quantity == 0) {
//         this.status = "out-of-Stock"
//     }
//     next();
// });
// productSchema.post("save", function (doc, next) {
//     // console.log("after saving data");
//     next();
// });
// =============================================


// create instance 
// =============================================

// productSchema.methods.logger = function () {
//     console.log(`data saved for ${this.name}`);
// }
// =============================================

const Product = mongoose.model("Product", productSchema)

module.exports = Product;