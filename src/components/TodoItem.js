import React from "react";
import '../App.css';


const TodoItem = ({ todos, handleDelete, handleEdit, handleToggle }) => {
  return todos.map((t) => (
    <li className={`singleTodo ${t.completed ? "completed" : ""}`} key={t.id}>
      <label className="singleTodo">
        <input
          type="checkbox"
          checked={t.completed}
          onChange={() => handleToggle(t.id)} // Handle toggle
        />
      </label>
        <span className={`singleTodo ${t.completed ? "completed" : ""}`}>{t.todo}</span>
      <button className = "eachTodo-btn" onClick={() => handleEdit(t.id)}>Edit</button>
      <button className = "eachTodo-btn" onClick={() => handleDelete(t.id)}>Delete</button>
    </li>
  ));
};

export default TodoItem;
