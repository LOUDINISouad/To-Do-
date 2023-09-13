import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] =useState([])
  function handleSubmit(e) {
    e.preventDefault()
    setTodos(currentTodos =>{
      return[
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false},

      ]
    })
    setNewItem("")

  }
  function toggleTodo(id,completed){
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id){
          todo.completed = completed
          //return {...todo, completed }
        }
        return todo
      })
    })

  }
  function deleteTodo(id){
     setTodos(currentTodos =>{
      return currentTodos.filter(todo => todo.id !==id )
     })

  }
  return (
    <>
      
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">  My list  </label>
          <input value={newItem} onChange={e => setNewItem(e.target.value)} id="item" />
        </div>
        <button className="btn">Add</button>
      </form>

      
      <h1 className="header">Organize your thoughts</h1>

     
      <ul className="list">
        {todos.map(todo =>{
           return (
            //you need to add a key to let every element has its spesific key 
            <li key={todo.id}>
            <label>
              <input type="checkbox" checke={todo.completed} onChange={e => toggleTodo(todo.is, e.target.checked)} />
              {todo.title}
            </label>
            <button onClick={() => deleteTodo(todo.id)} className="btn btn-danger">
             Delete
            </button>
          </li>
           )

        })
        
      }
       
        
      </ul>
    </>
  );
}