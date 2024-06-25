import React from 'react'
import "./TodoItem.css";

function TodoItem({todo}) {
  return (
    <div className="TodoItem">
      <input type="checkbox" checked={todo.isDone}/>
        <div className="content">{todo.content}</div>
        <div className="date">{new Date(todo.createdDate).toLocaleDateString()}</div>
        <button>삭제</button>

    </div>
  )
}

export default TodoItem