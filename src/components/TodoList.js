import React from "react";
import '../App.css';

const TodoItem = ({ todos, handleDelete, handleEdit, handleToggle }) => {
  // Separate them so that complete task goes to the bottom
  const completedTodos = todos.filter((t) => t.completed);
  const incompleteTodos = todos.filter((t) => !t.completed);

  // Combine incomplete and completed todos with completed ones at the bottom
  const combinedTodos = [...incompleteTodos, ...completedTodos];

  return combinedTodos.map((t) => (
    <li className={`singleTodo ${t.completed ? "completed" : ""}`} key={t.id}>
      <label className="singleTodo">
        <input
          type="checkbox"
          checked={t.completed}
          onChange={() => handleToggle(t.id)} // Handle toggle
        />
      </label>
      <span className={`singleTodo ${t.completed ? "completed" : ""}`}>{t.todo}</span>
      <button className="eachTodo-btn" onClick={() => handleEdit(t.id)}>Edit</button>
      <button className="eachTodo-btn" onClick={() => handleDelete(t.id)}>Delete</button>
    </li>
  ));
};

export default TodoItem;
