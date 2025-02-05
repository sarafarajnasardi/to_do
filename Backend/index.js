const express = require('express');
const {create_to_do,update_to_do}=require('./types');
const app = express();
const Task = require('./schema');
app.use(express.json());

app.post('/todo',async function(req, res){
    const payload=req.body;
    const parsedPayload=create_to_do.safeParse(payload);
    if(!parsedPayload.success){
        res.status(401).json({msg:"Invalid input"});
        return;
    }
    const title=payload.title;
    const description=payload.description;
    try{
    await Task.create({
        title: title,
        description: description,
        completed: false,
    });
    res.status(201).json({msg:"Task created successfully"});
}catch(err){
    res.status(500).json({msg:"Internal server error"});
}
})

app.get('/todos',async function(req, res){
    try{
    const todos=await Task.find({});
    res.json({
        todos
    });
    }catch(err){
    res.status(500).json({msg:"Internal server error"});
    }
})

app.put('/completed',async function(req, res){
      const payload=req.body;
      const parsedPayload=update_to_do.safeParse(payload);
      if(!parsedPayload.success){
        res.status(401).json({msg:"Invalid input"});
        return;
    }
    const taskId=payload.taskId;
    // const task=await Task.findById(taskId);
    // if(!task){
    //     res.status(404).json({msg:"Task not found"});
    //     return;
    // }
    // task.completed=true;
    try{
        await Task.update({
            _id: taskId
        },{
            completed: true
        })
        res.status(200).json({msg:"Task updated successfully"});
    }catch(err){
        res.status(500).json({msg:"Internal server error"});
    }
})

app.listen(3000,function(){
    console.log('Server is running on port 3000');
})