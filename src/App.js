import { useReducer, useRef } from 'react';
import './App.css';
import Header from './component/Header';
import TodoEditor from './component/TodoEditor';
import TodoList from './component/TodoList';

// 콜백 함수를 통해 부모 컴포넌트에 이벤트 전달.
// 또한 ‘ref’로 부모 컴포넌트에서 자식 컴포넌트의 함수를 호출? `ref` 활용. 
function reducer(state, action) {
  // action
  switch (action.type) {
    case "CREATE": {
      return [action.newItem, ...state];  // [item추가, ...기존배열]
    }
    case "UPDATE": {
      return state.map(
        (item) =>
        item.id === action.targetId
        ? {
          ...item,
          isDone: !item.isDone,
        }
        : item
      )
    }
    case "DELETE" : {
      return state.filter((item) => item.id !== action.targetId);
    }
    default:
      return state;
  }
}
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
      isDone : true,
      content :'집둥',
      createDate: new Date().getTime(),
  
    },
  ]
  const idRef = useRef(3);
  // const [todo, setTodo] = useState([])
  // const [todo, setTodo] = useState(mockTodo);
  const [todo, dispatch] = useReducer(reducer, mockTodo);
  const onCreate = (content) => {    
    // reducer 함수에서 type이 create 일 때, 작동할 함수.
    dispatch({  // action 객체
      type: "CREATE",
      newItem: {
        id: idRef.current,
        content,
        isDone: false,
        createDate: new Date().getTime(),
      },
    });
    idRef.current += 1;
  };
  // isDone 3항연산자 props 업데이트
  const onUpdate = (targetId) => {
//setTodo([{..,..}]); 기존 todo 의 id 와 todoItem 체크박스 id 값이 일치하는 것을 비교.
    dispatch({
      type: "UPDATE",
      targetId,
    })
  };
  // 삭제 버튼 onClick 시 실행할 함수. App->TodoList->TodoItem
  const onDelete = (targetId) =>{
    //setTodo([{,,,,,}]); filter 로 맵 생성
    dispatch({ type: "DELETE", targetId,});
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
