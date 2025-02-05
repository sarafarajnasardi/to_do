const express = require('express');
import {create_to_do,update_to_do} from require('./types');
const app = express();

app.use(express.json());

app.post('/todo',function(req, res){
    const title=req.body.title;
    const description=req.body.description;
})

app.get('/todos',function(req, res){
    

})

app.put('/completed',function(req, res){

})

app.listen(3000,function(){
    console.log('Server is running on port 3000');
})