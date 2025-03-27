// // const express=require('express')
// // const app=express();
// // const PORT=8080;

// // // console.log(app);

// // // // method used for fetching data
// // // app.get('/',(req,res)=> res.send("This is home page"));

// // // app.get('/user', (req, res) => {
// // //     console.log("User route accessed!");  // Debugging
// // //     let user = {
// // //         name: "bsraj",
// // //         age: 28,
// // //         email: "bsraj88",
// // //         city: "jaipur"
// // //     };
// // //     res.send(user);
// // // });



// // app.get('/',(req,res)=> res.send("This is home page"));



// // // method used for fetching data
// // app.get('/',(req,res)=> res.send("This is home page"));




// // //  method used for creating data
// // app.post('/',(req,res) => {

// // })

// // //  method used for update data
// // app.put('/:id',(req,res)=> {


// // })

// // //  method used for deleting data
// // app.delete('/:id',(req,res)=> {

    
// // })



// // app.listen(PORT,()=>  console.log(`server is running on port okay ${PORT}`));




// // ..........................PRACTICE............................................

// const express=require('express');
// const app=express();
// require('dotenv').config();

// app.use(express.json())

// const PORT=8000;

// const users=[
//     {
//         id:1,
//         name:"raj",
//         email:"eaj@gmail.com"
//     },
//     {
//         id:2,
//         name:"ankit",
//         email:"ankit@gmail.com"
//     },
//     {
//         id:3,
//         name:"rahul",
//         email:"rahul@gmail.com"
//     }

// ]


// app.get('/',(req,res) => {
//     res.send("ram ram ")
// })

// app.get('/users',(req,res) => {
//     res.send(users)
// })

// app.get("/users/:id", (req, res) => {
//     const userId = parseInt(req.params.id);
//     const user = users.find((u) => u.id === userId);
//       if (user) {
//         res.send(user);
//       } else {
//         res.status(404).send({ message: "User not found" });
//       }
//   });


//   app.post("/users", (req, res) => {
//     const { name, email } = req.body;
//     if (!name || !email) {
//       return res.status(400).json({
//         message: "Name and eamil is require "
//       })
//     }
  
//     const newUser = {
//       id: users.length + 1,
//       name,
//       email
//     }
  
  
//     users.push(newUser);
//     res.status(201).json(newUser)
//   })
  


// app.listen(3000)




