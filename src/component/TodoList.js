import { useState } from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";


export default function TodoList({todo, onUpdate, onDelete}) {
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