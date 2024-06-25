import React from 'react'
import TodoItem from './TodoItem'
import "./TodoList.css";

function TodoList({todos}) {
  return (
    <div className="TodoList">
        <h4>TodoList 😎</h4>
        <input className="search_bar" placeholder="input:focus{ border-bottom: }" />
        <div className="todo-container">
            {
              todos.map((todo) => {
                return <TodoItem key={todo.id} todo={todo} />
              })
            }
            
        </div>

    </div>
  )
}

export default TodoList