import React, { useEffect, useState } from 'react';
import './style.css';
import { NewTodoForm } from './NewTodoForm';
import { TodoList } from './TodoList';

export default function App() {
  
  const [todos, setTodos] =useState( () => {
    const LocalValue = localStorage.getItem("ITEMS")
    if(LocalValue == null) return []
    return JSON.parse(LocalValue)
  }

  )

  useEffect(()=> {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

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
      <TodoList todos={todos} 
      toggleTodo={toggleTodo} 
      deleteTodo={deleteTodo}/>

     
      
    </>
  );
}