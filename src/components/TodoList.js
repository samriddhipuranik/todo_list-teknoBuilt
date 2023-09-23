import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ key,todos, handleEdit, handleDelete, handleToggle }) => {
  return (
    <div>
      <ul className='allTodos'>
        
        {/* Map over todos and create a TodoItem component for each item */}
        {todos.map((todo) => (
          <TodoItem
            key={key}
            todo={todo}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
