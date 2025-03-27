const express = require('express');
const route=express.Router();

const Hotel=require('../models/hotel');

//create customer
route.post('/', async (req , res ) => {
    try {
        const data = req.body;

        const newcustomer = new Hotel(data);
                                                                                    
        const response = await newcustomer.save();

        console.log("Data saved");

        res.status(200).json(response)
        
    } catch (error) {
        console.log(error);        
        res.status(500).json({msg:"Interval server Error"})
    }

})


// get all customer
route.get('/', async (req,res) => {
    try {
        const data = await Hotel.find();
        console.log("Data fetched");
        res.status(200).json(data);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:"Interval error"})        
    }
})

// get customer by  roomtype
route.get('/:roomtype',async(req,res) => {
    try {
        const roomtype = req.params.roomtype;
        if(roomtype==="deluxe" || roomtype==="luxury"){
            const response  = await Hotel.find(({roomType : roomtype}));

            console.log("Room type data fetched");
            res.status(200).json(response)
            
        } else {
            res.status(404).json({msg:"Invalid room"})
        }

        
    } catch (error) {
        console.log(error);        
        res.status(500).json({msg:"Interval server Error"})
    }
})

// update customer room
route.put('/:id', async (req,res) => {
    try {
         const customerId= req.params.id;
         const updatecustomer=req.body;

         const response = await Hotel.findByIdAndUpdate(customerId,updatecustomer,{
            new:true,
            runValidators:true
         });

         if(!response){
            res.status(400).json({msg:"customer not found"})
         }

         console.log("Data Updated");

         res.status(200).json(response)
         

    } catch (error) {
         console.log(error);        
        res.status(500).json({msg:"Interval server Error"});
    }
})


// delete customer
route.delete('/:id', async (req,res) => {

try {
    const customerId = req.params.id;
    
    const response= await Hotel.findByIdAndDelete(customerId);

    if(!response){
        res.status(404).json({msg:"not delete"})
    }

    console.log("success delete");
    res.status(200).json({msg:"deleted"})
} catch (error) {
    console.log(error);
    res.status().json({msg:"Interval server Error"});
    
}
    
})





module.exports=route;