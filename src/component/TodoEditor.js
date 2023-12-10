import "./TodoEditor.css";
import { useState, useRef } from "react";

export default function TodoEditor({onCreate}) {
    const [content, setContent ] = useState('');
    const inputRef = useRef();
    const onChange = (e) => {
        setContent(e.target.value);
        // console.log(e.target.value);
    }
    const onSubmit = () => {
        if (!content) {
            inputRef.current.focus();
            return;
        }
        onCreate(content);
        setContent('');
    }
    const onKeyDown = (e) => {
        if (e.keyCode === 13) {
            onSubmit();
        }
    }

    return (
        <div className="TodoEditor">
             <h4>h4 새로운 Todo 작성하기 🕶️🎪</h4>
            <div className="editor_wrapper">
                <input ref={inputRef} onKeyDown={onKeyDown} onChange={onChange} value={content} placeholder="새로운 Todo..." />
                <button onClick={onSubmit}>추가</button>
            </div>
        </div>
    )
}