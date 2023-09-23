import React from 'react'

const TodoItem = ({todos, handleEdit, handleDelete}) => {
  return (
    <div>
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

    </div>
  )
}

export default TodoItem