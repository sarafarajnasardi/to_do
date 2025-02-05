const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://sarafarajnasardi786:30DW509wBF3fdBNv@learn0.jmqha.mongodb.net/taskDB");


const taskSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
});


const Task = mongoose.model("Task", taskSchema);


module.exports = Task;