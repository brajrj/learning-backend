const express=require('express')
const route = express.Router();
const Developer=require('../models/developer')
const passport = require('../auth');
const {jwtAuthmiddleware ,  generateToken} = require('../jwt')
const authmid = passport.authenticate('local', {session:false})
const bcrypt = require('bcrypt')

//create developer
route.post('/signup', async (req,res) => {
    try {
        
        const data = req.body;

        const newDeveloper= new Developer(data);

        const response = await newDeveloper.save();

        const payload = {
            username:response.username,
            email:response.email
        };

        const token = generateToken(payload)
        console.log("Token is",token);
        
        res.status(200).json({
            response:response,
            token:token
        })

        console.log("Data saved!");

        // res.status(200).json(response)
        

    } catch (error) {
        console.log(error);
        res.status(500).json({msg:"Internal server error"});
    }
});


//login api

route.post('/login',async(req,res) => {
    
    try {
        const {username,password} = req.body;

        const user = await Developer.findOne({username:username});

        if(!user || !(await user.comparePassword(user.password))){
             
            res.status(401).json({msg:"invalid username or password"})

        };

        const payload = {
            user
        };

        const token = generateToken(payload);
        console.log("Token is ", token);
        res.status(200).json({
            token:token,
        });
        

    } catch (error) {
        console.log(error);
        res.status(500).json({msg:"Internal server error"});
    }

});


// get all the developers
route.get('/',async (req,res) => {
    try {
        const data= await Developer.find();
        console.log("Data fetched");
        res.status(200).json(data);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:"Interval server error"});
    }
})

//get developer by the id
// route.get('/:id',async (req,res) => {
    

// })

// get developer by domain
route.get('/:techType',authmid,async (req,res) => {
    
   try {  
    const techType= req.params.techType;
    if(techType === "fullstack" || techType === "Fronted" ||techType === "Backend" ){
        const response = await Developer.find({work: techType});

        console.log("Tech type data fetched");
        res.status(200).json(response)
    }
    else {
        res.status(404).json({msg:"INvalid tech"})
    }
   } catch (error) {
    console.log(error);
    res.status(500).json({msg:"Interval server error"});
   } 
})

// update the developer
route.put('/:id',async (req,res) => {
 try {
    const developerId = req.params.id;
    const updatedDeveloper = req.body;

    const response = await Developer.findByIdAndUpdate(developerId, updatedDeveloper, {
        new:true,
        runValidators:true
    })

    if(!response){
        res.status(404).json({msg:"Developer not found"})
    };

    console.log("Data updated");

    res.status(200).json(response)
    
 } catch (error) {
    console.log(error);
    res.status(500).json({msg:"Interval server error"});
 }

})

//delete developer
route.delete('/:id',async (req,res) => {
    try {
        const studentId = req.params.id;

        const response = await Developer.findByIdAndDelete(studentId);

        if(!response){
            res.status(404).json({msg:"Students not found"})
        }

        res.status(200).json({msg:"Developer deleted successfully"})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:"Interval server error"});
    }
})

module.exports=route;