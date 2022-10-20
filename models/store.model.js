const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types


const storeSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "please provide a stor name"],
        trim: true,//blank space remove
        maxLength: [100, "name is too large"],
        lowercase: true,
        enum: {
            values: ["dhaka", "rajshahi", "chattogram", "syllhet", "khulna", "barishal", "rangpur"],
            message: "{VALUE} is not a valid name"
        }
    },
    description:String,
    status:{
        type: String,
        enum:["active","inactive"],
        default:"active"
    },
    manager:{
        name:String,
        contactNumber:String,
        id:{
            type:ObjectId,
            ref:"User"
        }

    }

},{
    timestamps:true
})

const Store = mongoose.model("Store", storeSchema);
module.exports = Store;