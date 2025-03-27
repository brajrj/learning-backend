const mongoose = require('mongoose');

const hotelschema= new mongoose.Schema({

    roomNo:{
        type : Number,
        required : true,
    },
     customerName : {
        type : String,
        required : true,
     },
     roomType : {
        type : String,
        enum : ["deluxe", "luxury"],
        required : true,

     },

     customerEmail : {
        type : String,
        required : true,
        unique : true,  

     },

     customerAddress : {
        type : String,
        required : true,
     },
})

const Hotel = mongoose.model('Hotel', hotelschema);

module.exports= Hotel;