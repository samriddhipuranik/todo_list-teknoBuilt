import React from 'react'

const TodoForm = ({handleSubmit, todo, editId, setTodo}) => {
  return (
    <div>      
    <form className='todoForm' onSubmit={handleSubmit}>
    <input onChange = {(e) => setTodo(e.target.value)}
    value={todo}
    type='text' 
    placeholder='Type your task here...' />
    <button type='submit'>
    {editId? "Edit":"Add"}
    </button>
  </form>
</div>
  )
}

export default TodoForm