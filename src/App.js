import React, { useState, useEffect} from 'react'
import './App.css';
import axios from 'axios';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    axios
      .get('https://api.quotable.io/random?tags=motivational')
      .then((response) => {
        const { content, author } = response.data;
        setQuote(`${content} - ${author}`);
      })
      .catch((error) => {
        console.error('Error fetching quote:', error);
      });
  }, []);

  // for single todo
const [todo, setTodo] = useState("")
// for list of today ---> array
const [todos, setTodos] = useState([]);
const [editId, setEditId] = useState(0);

const handleSubmit = (e)=>{
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

if(todo.trim() !== ''){
  setTodos([{id: `${todo}-${Date.now()}`, todo, completed : false}, ...todos]);
  setTodo("");
}else{
  alert("Enter some Task...!")
}
}
const handleDelete = (id)=>{
  const delTodo = todos.filter((to) => to.id !== id);
  setTodos([...delTodo])
};

const handleEdit = (id)=>{
  const editTodo = todos.find((i) => i.id === id); 
  setTodo(editTodo.todo);
  setEditId(id);
};

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
        Todo List App
      </h1>
      <TodoForm 
      key={todo.id}
      handleSubmit = {handleSubmit} 
      todo = {todo} 
      editId = {editId} 
      setTodo = {setTodo}/>
      <TodoList 
      todos = {todos} 
      handleEdit = {handleEdit} 
      handleDelete = {handleDelete}
      handleToggle={handleToggle}/>
    </div>
       <div className='footer'>
          <p className='motivational-quote'> {quote}</p>
        </div>
    </div>
  )
}

export default App