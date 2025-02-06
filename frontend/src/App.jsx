import { useState, useEffect } from 'react';
import './App.css';
import { CreateInput } from './componets/Input'; 
import { Todos} from './componets/Todos'
function App() {
  const [todos, setTodos] = useState([]);

  async function fetchtask() {
    try {
      const response = await fetch("http://localhost:3000/todos", { method: "GET" });
      const data = await response.json();
      console.log("Fetched todos:", data.todos);
      setTodos(data.todos);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  }

  useEffect(() => {
    fetchtask();
  }, []);

  return (
    <div>
      <CreateInput />
      <Todos todos={todos} />
    </div>
  );
}



export default App;
