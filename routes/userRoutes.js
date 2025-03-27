const express=require('express')
const route = express.Router();
const users=require('../utility/constant')


route.get('/',(req,res)=>{
res.send(users)
})

route.get("/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((u) => u.id === userId);
    if (user) {
      res.send(user);
    } else {
      res.status(404).send({ message: "User not found" });
    }
});


route.post("/", (req, res) => {
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
  res.status(200).json(newUser)
})


//Update

route.put('/:id', (req, res) => {
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

route.delete("/:id", (req, res) => {
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



module.exports=route;