import React from 'react'
import "./Header.css";

function Header() {
  return (
    <div>
        <h3>오늘은 ...</h3>
        <h1>{`${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`}</h1>
    </div>
  )
}

export default Header