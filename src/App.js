import { useState, useRef } from 'react';
import './App.css';
import Header from './component/Header';
import TodoEditor from './component/TodoEditor';
import TodoList from './component/TodoList';

// 콜백 함수를 통해 부모 컴포넌트에 이벤트 전달.
// 또한 ‘ref’로 부모 컴포넌트에서 자식 컴포넌트의 함수를 호출? `ref` 활용. 

 function App() {
  const mockTodo = [
    {
      id: 0,
      isDone : false,
      content : 'Hello 리액트',
      createDate: new Date().getTime(),
    },
    {
      id: 1,
      isDone : false,
      content : 'Hello 자바스크립트',
      createDate: new Date().getTime(),
    },
    {
      id: 2,
      isDone : true,createDate: new Date().getTime(),
    },
  ]
  const idRef = useRef(3);
  // const [todo, setTodo] = useState([])
  const [todo, setTodo] = useState(mockTodo);

  const onCreate = (content) => {
    const newItem = {
      id: idRef.current,
      content,
      isDone: false,
      createDate: new Date().getTime(),
    };
    setTodo([newItem, ...todo]);
    idRef.current += 1;
    console.log(`onCreate실행-idRef.current += 1 : ${idRef.current}`);
  }
  // isDone 3항연산자 props 업데이트
  const onUpdate = (targetId) => {
//setTodo([{..,..}]); 기존 todo 의 id 와 todoItem 체크박스 id 값이 일치하는 것을 비교.
    setTodo(
      todo.map((item) => 
        item.id === targetId ? {...item, isDone: !item.isDone} : item 
    )
    );
  };
  // 삭제 버튼 onClick 시 실행할 함수. App->TodoList->TodoItem
  const onDelete = (targetId) =>{
    //setTodo([{,,,,,}]); filter 로 맵 생성
    // console.log(targetId)
    setTodo(
      todo.filter((item)=>item.id !== targetId)
    )
  };
    return (
    <div className='App'>
      <Header />
      <TodoEditor onCreate={onCreate}/>
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete}/>  
    </div>
  );
}
export default App;
