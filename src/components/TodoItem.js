import React from 'react';

const TodoItem = ({todos, handleDelete, handleEdit, handleToggle}) => {

  return (
    todos.map((t) => (
        <li className={`singleTodo ${t.completed ? "completed" : ""}`} key={t.id}>
          <label>
            <input
              type="checkbox"
              checked={t.completed}
              onChange={() => handleToggle(t.id)} // Handle toggle here
            />
            <span className="todoText">{t.todo}</span>
          </label>
          <button onClick={() => handleEdit(t.id)}>Edit</button>
          <button onClick={() => handleDelete(t.id)}>Delete</button>
        </li>
      ))
  );
};

export default TodoItem;
