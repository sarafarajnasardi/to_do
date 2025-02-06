

export function Todos({ todos }) {
  return (
    <div>
      {todos.map((todo, index) => {
        console.log(todo.title);
        return (  
          <div key={index}>
            <h1>{todo.title}</h1>
            <p>{todo.content}</p>
            <button onClick={() => update(todo._id)}>{todo.completed ? "done" : "mark as done"}</button>
          </div>
        );
      })}
    </div>
  );
}

async function update(id) {
  try {
    await fetch(`http://localhost:3000/completed`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: id,
      }),
    });
    console.log('Task completed');
  } catch (e) {
    console.error('Error:', e);
  }
}
