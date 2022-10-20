const mongoose = require("mongoose");
const Product = require("./product.model");
const validator = require('validator');

const { ObjectId } = mongoose.Schema.Types


const stockSchema = mongoose.Schema({
    productId: {
        type: ObjectId,
        required: true,
        ref: 'Product'
    },
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
    price: {
        type: Number,
        required: true,
        min: [0, "Product price can't be negative"]
    },
    status: {
        type: String,
        required: [true, "status is require"],
        enum: {
            values: ["in-stock", "out-of-stock", "discontinued"],
            message: "status can't be {VALUE}"
        },
        lowercase: true
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
    },
    store: {
        name: {
            type: String,
            required: [true, "please provide a product name"],
            trim: true,//blank space remove
            minLength: [3, "length must be at least 3 character. "],
            maxLength: [100, "name is too large"],
            lowercase: true,
            enum: {
                values: ["dhaka", "rajshahi", "chattogram", "syllhet", "khulna", "barishal", "rangpur"],
                message: "{VALUE} is not a valid name"
            }
        },
        id: {
            type: ObjectId,
            required: true,
            ref: "Store"
        }
    },
    supplerBy: {
        name: {
            type: String,
            required: [true, "please provide a product name"],
            trim: true,//blank space remove
        },
        id: {
            type: String,
            ref: "Supplier"
        }
    }
}, {
    timestamps: true
}
)

const Stock = mongoose.model("Stock", stockSchema);
module.exports = Stock;