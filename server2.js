// /*
//  student 

//  {
//  class=1,2,3
//  name,
//  id, emial, class{
//  1,2,3} }

// total 5 object;
//   crud operation pura 

//   nodemon mai jake server 2 kar dena ye 






// // mongodb schema validatation 
// express se



// */

// const express=require('express');
// const app=express();

// require("dotenv").config();


// app.use(express.json());

// const PORT=process.env.PORT || 3000;


// const students=[
//   {
//     id:1,
//     name:"mukesh",
//     // class:1,
//     email:"mukesh@.com"
    
//   },
//   {
//     id:2,
//     name:"rakesh",
//     // class:2,
//     email:"rakesh@.com"
//   },
//   {
//     id:3,
//     name:"mahesh",
//     // class:3,
//     email:"mahesh@.com"
    
//   },
//   {
//     id:4,
//     name:"suresh",
//     // class:1,
//     email:"suresh@.com"
    
//   },
//   {
//     id:5,
//     name:"lokesh",
//     // class:2,
//     email:"lokesh@.com"
    
//   },

// ]
// app.get('/',(req,res) => {
//   res.send("hi friends");
// })

// app.get('/users',(req,res) => {
//   res.send(students)
// })


// app.get('/users/:id',(req,res) => {
//   const stdid=parseInt(req.params.id);
//   const std=students.find((u) => u.id===stdid);
//     if(std){
//       res.send(std);
//     }
//     else {
//       res.status(404).send({message: "user not found"});
//     }
//   });
  

// app.post('/student',(req,res) => {

//   const {name,email} = req.body;

//   if(!name || !email){
//     return res.status(400).json({
//       message:"Name and email are required"
//     });
//   }
// const newUser= {
//   id:students.length + 1,
//   name,
//   email
// };
// students.push(newUser);
// res.status(201).json(newUser)




// })

// app.listen(PORT,() => {
//   console.log(`server is the running ${PORT}`);
  
// })

