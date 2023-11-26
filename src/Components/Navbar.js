import './styles/Navbar.css'
import Sidenav from "./sidebar";

import logo from "./images/logo1.png"
import logo2 from "./images/logo2.png"
import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
function Navbar(){



    const navigate=useNavigate();
    const handleClick = () => {
    navigate("/");
    window.scrollTo({ left: 0, top: 400, behavior:"smooth" })
    };

  return(
    <div className="nav-part">

             <nav className="navigation">
              <Sidenav/>
              <img className="logo-img" src={require('./images/lll.png')}></img>
            <h1 id="title">StoryHaven</h1>
        <div className="navigation-menu">
         <ul>
           <li className="li">
             <Link to='/'><button>Home</button></Link>
           </li>
           <li className="li" id='cou'>
             <button  onClick={handleClick}>Stories</button>
             
           </li>
           
           <li className="list2"><div className="dropdown">
  <button className="dropbtn"><img src={logo2} className="drop-image"></img> </button>
  <div class="dropdown-content">
    <a className='drop'>My Profile</a>
    {/* <a className='drop' style={{color:'black'}}>Dashboard</a> */}
    <Link to='/log'>
      
    <a className='drop' 
    // onClick={()=>{firebase.auth().signOut()}}
    >Logout</a>
    </Link>
  </div>
</div>
           </li>
          
          
         </ul>
       </div> 
     </nav>
      </div>
  )
}
export default Navbar;