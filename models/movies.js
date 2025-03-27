const mongoose = require('mongoose');


const moviesschema = new mongoose.Schema({
    title:{
        type: String,
        required : true,
    },
    director:{
        type:String,
        required:true,
    },
    year:{
        type: Number,
        required : true,
    },
    genre:{
        type:String,
        required:true,
    },
    rating:{
        type:Number,
        required:true,
    },
});

const Movies = mongoose.model('Movies', moviesschema);

module.exports= Movies;