const mongoose  = require("mongoose");

mongoose.connect("mongodb://localhost:27017/ishtyResistration",{
    useNewUrlParser : true,
    useUnifiedTopology : true,
    // useCreateIndex : true,
}).then(()=>{
    console.log("Database connection successful...");
}).catch((err)=>{
    console.log(err);
});


//        defining schema for database
const mongoose = require("mongoose");
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
    profileInfo : [
        
    ]
})


//     second profile schema
const profileSchema = new mongoose.Schema({
    
})


//          defining moduals for register page 

const Register = new mongoose.model("Registrationdata", userSchema);
module.exports = Register;