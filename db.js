const mongoose = require('mongoose');
require("dotenv").config();


mongoose.connect(`${process.env.MongoURI}`);

const db = mongoose.connection;

db.on('connected', () => {
    console.log("Database connected");
});

db.on('error', (error) => {
    console.log("Error in connection", error);
});

db.on('disconnected', () => { 
    console.log("Database disconnected");
});

module.exports=db;