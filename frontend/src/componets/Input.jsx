import { useState, useEffect } from 'react';

export function CreateInput(){
    const [inputText, setInputText] = useState('');
    const [description, setDescription] = useState('');
    async function addtask(){
        try {
            const response = await fetch("http://localhost:3000/todo", 
            { 
                method: "POST" ,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title: inputText, description: description ,completed: false})
            }
           );
           setInputText('');
            setDescription('');

          } catch (error) {
            console.error("Error fetching todos:", error);
          }
    }
    return <div>
        <input value={inputText} onChange={(e)=>setInputText(e.target.value)} type="text" id="inputText" placeholder="Enter a title"></input><br />
        <input value={description} onChange={(e)=>setDescription(e.target.value)} type="text" placeholder="Enter Description"></input><br />
        <button onClick={addtask}>Add Task</button>
    </div>
}
