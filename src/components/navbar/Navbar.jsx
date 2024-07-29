import React, {useState} from 'react';
import './Navbar.scss';
import {Link} from 'react-router-dom';


function Navbar() {

  const [open, setOpen] = useState(false);

  const user = true;

  return (
    <nav>
      <div className='left'>
        <a href='#' className="logo">
          <img src='../home-smile-fill.png' />
          <span>CozyEstate</span>
        </a>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Agents</a>
      </div>

      <div className='right'>
        {user ? (
          <div className="user">
            <img src='/public/hooty.jpg'/>
            <span>Hooty</span>
            <Link to='/profile' className='profile'>
              <div className="notification">2</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
          <a href="#">Sign in</a>
          <a href="#" className='register'>Sign up</a>
          </>
        )}

        <div className='menuIcon'>
          <img src='../menu.png'
          onClick={()=>setOpen((prev)=>!prev)} />
        </div>

        <div className={open ? "menu active" : "menu"}>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Agents</a>
          <a href="#">Sign in</a>
          <a href="#">Sign up</a>
        </div>
      
      </div>    
      
    </nav>
  )
}

export default Navbar