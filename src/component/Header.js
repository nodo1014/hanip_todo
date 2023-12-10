import "./Header.css";

export default function Header() {

    return (
        <div className="Header">
             <h3>오늘은 이모지 윈+쩜 😎</h3>
             <h1>toDateString: {new Date().toDateString()}</h1>
             <p>toLocaleDateString: {new Date().toLocaleDateString()}</p>
             <p>getTime: {new Date().getTime()}</p>
        </div>
    );
};