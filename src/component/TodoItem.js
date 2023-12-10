//커맨드 스페이스 :자동 입력
import "./TodoItem.css";

export default function TodoItem({id, isDone, content, createDate, onUpdate, onDelete}) {
    // const [chkValue, setChkValue] = useState(false);
    // check 스테이트는 어디서? 부모 App 에서?
    const onChangeCheckbox = (e) => {
        //onChange시, props로 받은 함수 실행. alert('hello')와 같음.
        console.log('onUpdate', id, e.target.checked);
        onUpdate(id);
    }
    const onClickDelete = (e) => {
        onDelete(id);
    }
    return (
        <div className="TodoItem" key={id}>
            <div className="checkbox_col">
                <input onChange={onChangeCheckbox} type="checkbox" checked={isDone}/>
            </div>
            <div className="title_col">{content}</div>
            <div className="date_col">{new Date(createDate).toLocaleDateString()}</div>
            <div className="btn_col">
                <button onClick={onClickDelete}>삭제</button>
            </div>
        </div>
    )
}