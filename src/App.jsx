import { useState } from 'react'
import './App.css'
import Editor from './components/Editor'
import Header from './components/Header'
import TodoList from './components/TodoList'

const mockdata = [
  {
    id: 1,
    isDone: false,
    content: "열러뽕따이",
    createdDate: new Date().toString(),
  },
  {
    id: 2,
    isDone: true,
    content: "2번 todo mock data",
    createdDate: new Date().toString(),
  },
]

function App() {

  const [todos, setTodos] = useState(mockdata);

  const onCreate = (content) => {
    const newTodo = {
      id : 3,
      isDone: false,
      content: content,
      createdDate: new Date().getTime()
    }
    setTodos([newTodo, ...todos]);
  }
// 수정과 삭제는 id 필요.
// 수정: isDone 확인 후, toggle. map + if 또는 3항 연산자
  const onUpdate = (targetId)=>{
//     setTodos(todos.map((todo)=>
//       todo.id === targetId
//     ? {...todo, isDone: !todo.isDone}
//   : todo
// ))
    const newTodos = todos.map((todo) => {
      if (todo.id === targetId) {
        return {
         ...todo,
          isDone:!todo.isDone
        }
      }
      return todo;
    })
    setTodos(newTodos);
  }

//삭제
  // const onDelete =() =>{}

   return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate}/>
      <TodoList todos={todos} onUpdate={onUpdate}/>
    </div>
  )
}

export default App
