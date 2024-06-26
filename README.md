# React + Vite
https://chapter7-dun.vercel.app/

### useState 로 input 에서 onCreate 로 Todo 생성만 연습.


 setTodo([newTodo, ...todos])

 ```javascript
 const onCreate = (content) => {
    const newTodo = {
      id : 3,
      isDone: false,
      content: content,
      createdDate: new Date().getTime()
    }
    setTodos([newTodo, ...todos]);
  }
 ```
 onUpdate

 ```javascript
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
 ```

 ## Editor 인풋폼
 - useState("")
 - onClick : e.target.value 
 - onClick

```javascript
function Editor({onCreate}) {
const [content, setContent] = useState("");

const onChangeContent = (e) => {
  setContent(e.target.value);
}

const onSubmit = () => {
  onCreate(content);
  setContent('');
}
  return (
    <div className='Editor'>
        <input value={content} onChange={onChangeContent} placeholder="새로운 Todo"/>
        <button onClick={onSubmit}>저장</button>
    </div>
  )
}
 ```

 ## 삭제와 수정 폼 (체크박스, 삭제 버튼)

 ```javascript
 function TodoItem({todo, onUpdate, onDelete}) {
  const onToggle = () => {
    onUpdate(todo.id);
  }
  const onClickDelete = () => {
    onDelete(todo.id);
  }
  return (
    <div className="TodoItem">
      <input onChange={onToggle} type="checkbox" checked={todo.isDone}/>
        <div className="content">{todo.content}</div>
        <div className="date">{new Date(todo.createdDate).toLocaleDateString()}</div>
        <button onClick={onClickDelete}>삭제</button>

    </div>
  )
 ```