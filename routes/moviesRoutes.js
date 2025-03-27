const express = require('express');
const route = express.Router();

const Movies = require('../models/movies');

// create movies data

route.post('/', async (req,res) => {
    try {
        const data = req.body;
         const newmovies = new Movies(data);

         const response = await newmovies.save();

         console.log("Data saved");

         res.status(200).json(response)
         
    } catch (error) {
        console.log(error);
        res.status(400).json({msg:"Interval server error"})
        
    }
})

// get all movies
route.get('/', async (req , res) => {
    try {
        const data = await Movies.find();
        console.log("Data get");
        res.status(200).json(data);


    } catch (error) {
        console.log(error);
        res.status(500).json({msg:"Interval server error"})
    }
})

//get by id
route.get("/:id", async (req, res) => {
    try {
        const movieId = req.params.id;
        const movie = await Movies.findById(movieId);

        if (movie) {
            res.status(200).json(movie);
        } else {
            res.status(404).json({ message: "Movie not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});


  // update movie details
  route.put('/:id', async (req, res) => {
    try {
       const movieid = req.params.id;
       const updatemovie = req.body;
 
       const response = await Movies.findByIdAndUpdate(movieid, updatemovie, {
          new: true,
          runValidators: true
       });
 
       if (!response) {
          return res.status(404).json({ msg: "Movie not found" });
       } 
 
       console.log("Successfully updated");
 
       res.status(200).json(response);
    } catch (error) {
       console.log(error);
       res.status(500).json({ msg: "Internal Server Error" });
    }
 });
 

 // delete the movies

 route.delete('/:id' , async (req,res) => {
        try {
            const movieId = req.params.id;
            
            const response = await Movies.findByIdAndDelete(movieId);
    
            if (!response) {
                return res.status(404).json({ msg: "Movie not found" });
            }
    
            console.log("Successfully deleted");
            res.status(200).json({ msg: "Movie deleted successfully" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ msg: "Internal Server Error" });
        }
    });
    



module.exports=route;