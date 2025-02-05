

export function CreateInput(){
    return <div>
        <input type="text" id="inputText" placeholder="Enter a title"/><br />
        <input type="text" placeholder="Enter Description"></input><br />
        <button onClick={CreateDiv}>Add Task</button>
    </div>
}
