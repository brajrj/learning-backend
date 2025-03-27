const express = require('express');
const app = express();
const passport = require('passport');
const LocalStrategy = require('passport-local');
const Developer = require('./models/developer')
const becrypt=require('bcrypt')

passport.use(

    new LocalStrategy(async (username, password , done) => {
        try {
            console.log("received", username , password);
            
            const user = await Developer.findOne({username:username});

            if(!user){
                return done(null, false, {msg:"Incorrect usernaem"})
            }

            // const isPasswordMatch = user.password === password ? true : false;
            const isPasswordMatch = await becrypt.compare(password, user.password);


            // password ==="$2b$10$lUwDeDWs6xNe/jaDpDNUR.fnAsYAVgYiLN.RnPZvv2xQLEpLcTLla"

            
            if(isPasswordMatch){
                return done(null, user)
            }else {
                return done(null, false, {message:"Incorrect password"})
            }
        } catch (error) {
            done(error)
        }
    })
);

app.use(passport.initialize());

module.exports = passport;