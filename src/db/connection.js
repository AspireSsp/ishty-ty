const mongoose  = require("mongoose");

mongoose.connect("mongodb://localhost:27017/ishtyResistration",{
    useNewUrlParser : true,
    useUnifiedTopology : true,
    // useCreateIndex : true,
}).then(()=>{
    console.log("Database connection successful...");
}).catch((err)=>{
    console.log(err);
})