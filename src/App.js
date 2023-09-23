import React, { useState } from 'react'
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App = () => {
  // for single todo
const [todo, setTodo] = useState("");
// this is for all - its an array 
const [todos, setTodos] = useState([]);
// contains the id of variable that we need to edit 
const [editId, setEditId] = useState(0);

const handleSubmit = (e)=>{
// to not refresh 
e.preventDefault();
 console.log("todo:", todo);
  console.log("editId:", editId);
  console.log("todos:", todos);
if(editId){
  const editTodo = todos.find((i) => i.id === editId);
  const updatedTodos = todos.map((t)=>t.id === editTodo.id? t = {id : t.id, todo} : {id : t.id, todo : t.todo});
  setTodos(updatedTodos);
  setEditId(0);
  setTodo('');
  return;
}
if(todo !== ''){

  // making id unique
  // spread operator 
  setTodos([{id: `${todo}-${Date.now()}`, todo, completed : false}, ...todos]);
  // now everytime we click on add - todo list will get updated 
  // we want the single state to be empty - after adding 
  setTodo("");
}
}
const handleDelete = (id)=>{
  const delTodo = todos.filter((to) => to.id !== id);
  setTodos([...delTodo])
};

const handleEdit = (id)=>{
  // its going to return entire todo - id and object 
  const editTodo = todos.find((i) => i.id === id); 
  // editTodo is an object which contains id and a todo so .todo 
  setTodo(editTodo.todo);
  setEditId(id);
};
// const handleToggle = (id)=>{
//   const updatedTodos = todos.map((t)=> t.id !== id? t = {id : t, todo, completed} :{id : t.id, todo : t.todo, completed : !completed});
//   setTodos(updatedTodos);
// };
const handleToggle = (id) => {
  const updatedTodos = todos.map((t) =>
    t.id !== id ? t : { ...t, completed: !t.completed }
  );
  setTodos(updatedTodos);
  setTodo('');
};

  return (
    <div className='App'> 
    <div className='container'>
      <h1>
        Todo list
      </h1>
      <TodoForm 
      handleSubmit = {handleSubmit} 
      todo = {todo} 
      editId = {editId} 
      setTodo = {setTodo}/>
      <TodoList 
      key={todo.id}
      todos = {todos} 
      handleEdit = {handleEdit} 
      handleDelete = {handleDelete}
      handleToggle={handleToggle}/>
    </div>
    </div>
  )
}

export default App