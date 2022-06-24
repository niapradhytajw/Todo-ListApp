import React, { useState } from "react";
import "./App.css";
import List from "./List";
//import Logo from "./../../public/logo.png"

function App() {
  const [todoItem, setTodoItem] = useState('');
  const [items, setItems] = useState([]);
  const handleChange = (event)=> {
    setTodoItem(event.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    setItems([...items, todoItem]);
    setTodoItem('');
  }
  return (
    <div className="main">
      <div classsName="header-container">
      <h1>To-do-List App</h1>
     
      <form className="input-item"  onSubmit={event=>handleSubmit(event)}>
        <input placeholder="Add a to do ..." value={todoItem} onChange={event=>handleChange(event)}/>
        <button type="submit">Add</button>
      </form>
      <List items={items}/>
      </div>
    </div>
  );
}

export default App;
