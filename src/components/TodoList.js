import React from "react";
import TodoItem from "./TodoItem";
import '../App.css';


const TodoList = ({ todos, handleDelete, handleEdit, handleToggle }) => {
  return (
    <ul className="allTodos">
      <TodoItem
        todos={todos}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handleToggle={handleToggle}
      />
    </ul>
  );
};

export default TodoList;
