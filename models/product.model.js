const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, "please provide a product name"],
        trim: true,//blank space remove
        unique: true,
        minLength: [3, "length must be at least 3 character. "],
        maxLength: [100, "name is too leargs"]

    },
    description: {
        type: String,
        require: true,

    },
    price: {
        type: Number,
        require: true,
        min: [0, "price can't be negative"]
    },
    unit: {
        type: String,
        require: true,
        enum: {
            values: ["kg", "pcs", "liter"],
            message: "unite values can't be {values}. must be kg/pcs/liter "
        }
    },
    quantity: {
        type: Number,
        require: [true, "quantity is require"],
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
        require: [true, "status is require"],
        enum: ["in-Stock", "out-of-Stock", "discontinued"]
    },
    // supplier:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref:'Supplier'
    // },
    // categories:[{
    //     name:{
    //         type:String,
    //         require:true,
    //     },
    //     _id:mongoose.Schema.Types.ObjectId
    // }]
    // createdAt:{
    //     type:Date,
    //     default: Date.now

    // },
    // updatedAt:{
    //     type:Date,
    //     default: Date.now
    // }

}, {
    timestamps: true,
    // _id: true or false 
});

// mongoose middleware // must be normal function
productSchema.pre('save', function (next) {
    if (this.quantity == 0) {
        this.status = "out-of-Stock"
    }
    next();
});
productSchema.post("save", function (doc, next) {
    // console.log("after saving data");
    next();
});

// create instance 
productSchema.methods.logger = function () {
    console.log(`data saved for ${this.name}`);
}

const Product = mongoose.model("Product", productSchema)

module.exports = Product;