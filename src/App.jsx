import React, { useState } from 'react';
import './style.css';
import { NewTodoForm } from './NewTodoForm';

export default function App() {
  
  const [todos, setTodos] =useState([])
  function addToDo(title){

    setTodos(currentTodos =>{
          return[
            ...currentTodos,
            { id: crypto.randomUUID(), title,  completed: false},
    
          ]
    })
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
      
      <NewTodoForm onSubmit={addToDo} />  
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