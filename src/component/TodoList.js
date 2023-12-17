import { useMemo, useState } from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";


export default function TodoList({todo, onUpdate, onDelete}) {
    const analyzeTodo = useMemo(() => {
        console.log('analyze 함수 호출 횟수-useMemo')
        const totalCount = todo.length;
        const isDoneCount = todo.filter((item)=>item.isDone).length
        const ingCount = totalCount - isDoneCount;
        return {
            totalCount,
            isDoneCount,
            ingCount,
        };
    },[todo]);
    // const {totalCount, isDoneCount, ingCount} = analyzeTodo();
    // useMemo는 함수가 아닌 값을 반환하므로, analyzeTodo 에는 값이 저장된다. 따라서 () 을 삭제.
    const {totalCount, isDoneCount, ingCount} = analyzeTodo;
    // 검색어를 입력해도, todo 값은 변하지 않았기 때문에, analyzeTodo 를 호출하지 않음.

    const [search, setSearch] = useState('');
    const onChangeSearch = (e) => {
        console.log(search);
        setSearch(e.target.value);
    }
    const getSearchResult = () => {
        return search === ""
        ? todo
        : todo.filter((item)=> item.content.toLowerCase().includes(search.toLowerCase()));
    }
    return (
        <div className="TodoList">
            <h4>Todo List</h4>
            <div>Total : {totalCount} </div>
            <div>완료: {isDoneCount}</div>
            <div>미완료: {ingCount} </div>
            <input value={search} onChange={onChangeSearch} className="searchbar" placeholder="검색어를 입력하세요" />
            <div className="list_wrapper">
                {/* <TodoItem /> */}
                {/* { todo.map((item) => ( */}
                { getSearchResult().map((item) => (
                    <TodoItem onDelete={onDelete} onUpdate={onUpdate} key={item.id} {...item} />
                )) }
            </div>
        </div>
    );
}