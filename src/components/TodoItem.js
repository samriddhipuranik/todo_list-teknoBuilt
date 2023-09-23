import React from 'react';

const TodoItem = ({ todo, handleEdit, handleDelete, handleToggle }) => {
  const { id, todoText, completed } = todo;

  return (
    <li className={`singleTodo ${completed ? 'completed' : ''}`} key={id}>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => handleToggle(id)}
        />
        <span className='todoText'>{todoText}</span>
      </label>
      <button onClick={() => handleEdit(id)}>Edit</button>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
