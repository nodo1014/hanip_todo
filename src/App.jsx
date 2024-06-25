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
   return (
    <div className="App">
      <Header />
      <Editor  onCreate={onCreate}/>
      <TodoList todos={todos} />
    </div>
  )
}

export default App
