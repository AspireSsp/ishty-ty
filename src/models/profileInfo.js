
// Step 3 - this is the code for ./models.js
  
var mongoose = require('mongoose');
  
var imageSchema = new mongoose.Schema({
    fullname: String,
    Headline: String,
    position: String,
    github : String,
    instagram : String,
    facebook : String,
    twitter : String,
    edu10 : String,
    edu10Mark : Number,
    edu12 : String,
    edu12Mark : Number,
    location : String,
    img:
    {
        data: Buffer,
        contentType: String
    }
});
  
//Image is a model which has a schema imageSchema
  
module.exports = new mongoose.model('Image', imageSchema);





// const mongoose = require("mongoose");
// const userProfileSchema = new mongoose.Schema({

//     img: {
//         data: Buffer,
//         contentType: String
//     },
//     fullname : {
//         type:String,
//         required:true,
//     },
//     headLine : {
//         type:String,
//         required:true,
//     },
//     currPosition : {
//         type:String,
//         required:true,
//     },
//     githubProLink : {
//         type:String,
//     },
//     instaProLink : {
//         type:String,
//     },
//     facebookProLink : {
//         type:String,
//     },
//     twitterProLink : {
//         type:String,
//     },
//     edu10bord : {
//         type:String,
//     },
//     marks10bord : {
//         type:Number,
//     },
//     edu12bord : {
//         type:String,
//     },
//     marks12bord : {
//         type:Number,
//     },
//     address : {
//         type : String,
//     }

// })
// //          defining modual for profileinfo page ...../
// module.exports =  new mongoose.model('UpdateProfileData', userProfileSchema);