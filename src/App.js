import React, { useState } from 'react'
import './App.css';

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
  setTodos([{id: `${todo}-${Date.now()}`, todo}, ...todos]);
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

}
  return (
    <div className='App'> 
    <div className='container'>
      <h1>
        Todo list
      </h1>
      <form className='todoForm' onSubmit={handleSubmit}>
        <input onChange = {(e) => setTodo(e.target.value)}
        value={todo}
        type='text' 
        placeholder='Type your task here...' />
        <button type='submit'>
        {editId? "Edit":"Add"}
        </button>
      </form>
      <ul className='allTodos'>
        {
          todos.map((t) =>(
            <li className='singleTodo'>
            <span key={t.id} className='todoText'>
            {t.todo}
            </span>
            <button onClick={()=> handleEdit(t.id)}>Edit</button>
            <button onClick={()=> handleDelete(t.id)}>Delete</button>
          </li>
          ))
        }
      </ul>
    </div>
    </div>
  )
}

export default App