
import { useState } from 'react'
import './App.css'
function App() {
  const [todo, setTodo] =useState('')
  const [todos, setTodos] = useState([]);

  const addTodo =() => {
    if (todo.trim() !== '') 
      setTodos([...todos, todo]);
    setTodo('')
  }
  

  return (
    <div className="App">
       <h1>TODO LIST</h1>
       <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} placeholder="Enter a new task"/>
       <button onClick={addTodo} >ADD Todo</button>
       <ul>
        {Array.isArray(todos) && todos.map((item, index) => (  
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default App