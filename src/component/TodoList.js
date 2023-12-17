import { useState } from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";


export default function TodoList({todo, onUpdate, onDelete}) {
    const analyzeTodo = () => {
        const totalCount = todo.length;
        const isDoneCount = todo.filter((item)=>item.isDone).length
        const ingCount = totalCount - isDoneCount;
        return {
            totalCount,
            isDoneCount,
            ingCount,
        };
    };
    const {totalCount, isDoneCount, ingCount} = analyzeTodo();
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