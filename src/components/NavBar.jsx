import { useState } from "react";
import { Link } from "react-router-dom";
import NavMenuDisplay from "./NavMenuDisplay";


function NavBar() {
    
  return (
    <div className="Navbar">
        <div className="header">
          <button className="homeButton">
          <Link to="/App">
            <img className='homeIcon' alt='white home icon' src='https://icons.veryicon.com/png/o/miscellaneous/zhiutech-icon/house-34.png' />
          </Link>
          </button>
          <Link to="/gallery">
            <div className="icon">PORTFOLIO</div>
          </Link>
          <Link to="/travel">
            <div className="icon">TRAVEL PHOTOGRAPHY</div>
          </Link>
          <Link to="/skills">
            <div className="icon">SKILLS</div>
          </Link>
          <Link to="/aboutme">
            <div className="icon">ABOUT ME</div>
          </Link>
        </div>
        <div className='menuBar'>
        
        </div>
    </div>
  )
}

export default NavBar