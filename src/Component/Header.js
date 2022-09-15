import React from 'react'
import './body.css';
const Header = () => {
  return (
    <div>
      <header>
        <h2>CDAC</h2>
        <div className='nav'>
        <a href='home'>Home</a>
        <a href='about'>About</a>
        <a href='contact'>Contact</a>
        <a href='login'>Login</a>      
        </div>
      </header>
     
    </div>
  )
}

export default Header
