const express = require('express');
const {create_to_do,update_to_do}=require('./types');
const app = express();
const Task = require('./schema');
app.use(express.json());
const cors = require('cors');

app.use(cors());
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

app.put('/completed', async function (req, res) {
    // Assuming req.body already has parsed data
    const { id } = req.body;  // Destructuring to directly access 'id'
    
    // Validation (optional but good practice)
    if (!id) {
      return res.status(400).json({ msg: "Task ID is required" });
    }
  
    try {
      const task = await Task.findById(id);  // Find the task by ID
      if (!task) {
        return res.status(404).json({ msg: "Task not found" });
      }
  
      // Update the task status
      task.completed = true;
      await task.save();  // Save the updated task
  
      res.status(200).json({ msg: "Task updated successfully" });
    } catch (err) {
      console.error(err);  // Log the error for debugging
      res.status(500).json({ msg: "Internal server error" });
    }
  });
  

app.listen(3000,function(){
    console.log('Server is running on port 3000');
})