  console.log(typeof(id));
const express = require('express');
const app = express()
require("dotenv").config();




app.use(express.json())



const port = process.env.PORT || 3000;

const users = [
  {
    id: 1,
    name: "samir",
    email: "samir@gamil.com",
  },
  {
    id: 2,
    name: "rahul",
    email: "rahul@gamil.com",
  },
];

app.get("/", (req, res) => {
    res.send('hello node')
})

app.get('/users',(req,res)=>{
res.send(users)
})

app.get("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((u) => u.id === userId);
    if (user) {
      res.send(user);
    } else {
      res.status(404).send({ message: "User not found" });
    }
});


app.post("/users", (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({
      message: "Name and eamil is require "
    })
  }

  const newUser = {
    id: users.length + 1,
    name,
    email
  }


  users.push(newUser);
  res.status(201).json(newUser)
})


//Update

app.put('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const { name, email } = req.body;

  let user = users.find((u) => {
    return u.id === userId
  });
  if (!user) {
    return res.status(404).json({
      message:'User not found'
    })
  }

  user.name = name;
  user.email = email;

  res.json(user);
})


//delete

app.delete("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id)
    
  let userIndex = users.findIndex((u) => u.id === userId);

  if (userIndex === -1) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  users.splice(userIndex, 1);
  res.status(200).json({
    message: "User deleted successfully",
  });
})




app.listen(port, () => {
  console.log(`server is running on port:${port}`)
  
})




  

  
