import "./TodoItem.css";
import { useState } from "react";

function TodoItem({todo, onUpdate}) {
  const onToggle = () => {
    onUpdate(todo.id);
  }
  return (
    <div className="TodoItem">
      <input onChange={onToggle} type="checkbox" checked={todo.isDone}/>
        <div className="content">{todo.content}</div>
        <div className="date">{new Date(todo.createdDate).toLocaleDateString()}</div>
        <button>삭제</button>

    </div>
  )
}

export default TodoItem