const mongoose = require("mongoose");
// const  = require("nodemon/lib/utils");
//          defininn schema for register page
const userSchema = new mongoose.Schema({
    fullname : {
        type:String,
        required:true,
    },
    username : {
        type:String,
        required:true,
    },
    email : {
        type: String,
        required : true,
        unique : true
    },
    phone : {
        type : Number,
        required : true
    },
    password : {
        type: String,
        required: true
    },
    cnfpassword : {
        type :String,
        required : true
    },
    gender : {
        type : String,
        required : true 
    },
    prfileInfo : [
        
    ]

})

//          defining moduals for register page 

const Register = new mongoose.model("Registrationdata", userSchema);
module.exports = Register;