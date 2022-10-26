
const mongoose = require('mongoose');
const validator = require('validator');
const { ObjectId } = mongoose.Schema.Types;

const supplierSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "please provide a supplier name "],
        trim: true,
        lowercase: true,
        minLength: [3, "supplier name at least 3 character"],
        maxLength: [100, "supplier name is too long"]
    },
    email: {
        type: String,
        required: [true, "supplier email is require"],
        trim: true,
        lowercase: true,
        validate: [validator.isEmail, "provide a valid email"],
        unique: true,
    },
    brand: {
        name: {
            type: String,
            trim: true,
            required: true,
            lowercase: true,
            unique: true,
        },
        id: {
            type: ObjectId,
            ref: 'Brand',
            required: true
        }

    },
    contactNumber: {
        type: String,
        min: 11,
        required: [true, "please provide a contact number"],
        validate: {
            validator: (value) => {
                return validator.isMobilePhone(value)
            },
            message: "please provide a valid phone number"
        }
    },
    emergencyContactNumber: {
        type: String,
        required: [true, "please provide a emergency contact number"],
        validate: {
            validator: (value) => {
                return validator.isMobilePhone(value);
            },
            message: "please provide a valid phone number"
        }

    },
    tradeLicenceNumber: {
        type: String,
        required: [true, "please provide a trade licence Number "]
    },
    presentAddress: {
        type: String,
        required: [true, "please provide a present address "]
    },
    permanentAddress: {
        type: String,
        required: [true, "please provide a permanent address "]
    },
    location: {
        type: String,
        required: [true, "location is require"],
        trim: true,
        lowercase: true,
        enum: {
            values: [
                "dhaka",
                "rajshahi",
                "chattogram",
                "syllhet",
                "khulna",
                "barishal",
                "rangpur"],
            message: "supplier {VALUE} is not a valid name"
        }
    },

    imageUrl: {
        type: String,
        validate: [validator.isURL, "please provide a valid url"]
    },
    nationalIdimageUrl: {
        type: String,
        validate: [validator.isURL, "please provide a valid url"]
    },
    status: {
        type: String,
        enum: ["active", "inactive"],
        lowercase: true,
        default: "active"
    }

}, {
    timestamps: true
})

const Supplier = mongoose.model("Supplier",supplierSchema);
module.exports = Supplier;