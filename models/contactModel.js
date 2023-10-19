const mongoose = require("mongoose");


const contactShema = mongoose.Schema({
    
    name: {
        type: String,
        required: [true,"Please Add the contact name"]
    }
    ,
    email: {
        type: String,
        required: [true, "Please Add the contact email "]
    },
    phone: {
        type: String,
        required: [true, "Please Add the contact phone number"]
    }

}, {
    timestamps: true,
});

module.exports = mongoose.model("Contact" , contactShema)