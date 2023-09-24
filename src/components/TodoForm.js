import React from "react";
import '../App.css';

const TodoForm = ({ key, handleSubmit, todo, editId, setTodo }) => {
  return (
    <div>
      <form className="todoForm" onSubmit={handleSubmit}>
        <input
          onChange={(e) => setTodo(e.target.value)}
          key={key}
          value={todo}
          type="text"
          placeholder="Type your task here..."
          
        />
        <button className = "add-btn"type="submit">{editId ? "Edit" : "Add"}</button>
      </form>
    </div>
  );
};

export default TodoForm;
