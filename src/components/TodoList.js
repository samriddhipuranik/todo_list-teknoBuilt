import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todos, handleEdit, handleDelete}) => {
  return (
    <div>
        <ul className='allTodos'>
        <TodoItem todos = {todos} handleEdit = {handleEdit} handleDelete = {handleDelete}/>
        </ul>

    </div>
  )
}

export default TodoList