const express= require('express')
const route=express.Router();
const tasks=require('../utility/taskdata')

route.get('/',(req,res)=>{
    res.send(tasks)
})


route.get('/:id',(req,res) => {
    const taskid =parseInt( req.params.id);
    const task = tasks.find((u) => {
        return u.id === taskid
    });

    if(task){
        res.send(task)
    } else{
        res.status(404).json({msg:"User not found"});
    }

});

route.post("/",(req,res) => {
    const { title,description, status } = req.body;

    if(!status || !title || !description){
        return res.status(400).json({
            msg:"Not done cpmplete detaikes"
        })
    }

    const newtasks = {
        id:tasks.length +1,
        title,
        description,
        status
    }

    tasks.push(newtasks);
    res.status(200).json(newtasks)
});


route.put('/:id',(req,res) => {
    const taskid=parseInt(req.params.id);
    const {title,description, status } = req.body;

    let task = tasks.find((u) => {
        return u.id===taskid;
    });
    if(!task){
        return res.status(404).json({
            message:'tasks not found'
          })
    }

    task.description=description;
    task.status=status;
    task.title=title;

    res.json(task);
})

route.delete("/:id",(req,res) => {
    const taskid = parseInt(req.params.id);

    let taskindex = tasks.findIndex((u) => u.id === taskid);

    if(taskindex === -1){
        return res.status(404).json({
            msg:"tasks not found",
        });
    }

    tasks.splice(taskindex,1);
    res.status(200).json({
        msg:"tasks delete successfully"
    });
})








module.exports=route;