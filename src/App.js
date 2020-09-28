import React, { useState, useEffect } from 'react';
import './App.css';

import Form from './Components/Form';
import TodoList from './Components/ToDoList';
import ReactHook from './Components/Demo/ReactHook'

function App() {
  //Satte Staff
  const [inputText,setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //Run one when the app start
  useEffect( () => {
    getLocalTodos();
  }, []);

  //USE EFFECT
  useEffect( () => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status])
  //Functions
  const filterHandler = () => {
    switch(status){
      case 'completed': 
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted': 
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default: 
        setFilteredTodos(todos)
        break;    
    }
  }
  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }
  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null){
      localStorage.getItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal)
    }
  }
  return (
    <div className="App">
      <header>
  <h1>TO DO LIST</h1>
      </header>
      <Form todos={todos}  setTodos={setTodos}
        inputText={inputText} setInputText={setInputText}
        setStatus={setStatus}
        />
      <TodoList todos={todos} filteredTodos={filteredTodos} setTodos={setTodos}/>
      <ReactHook/>
    </div>
  );
}

export default App;
