import React from "react";
import { Link } from "react-router-dom";
// import Projects from "./Projects"


function NavBar() {
    
  return (
    <div className="Navbar">
        <div className="header">
          <Link to="/App">
            <div className="icon">Home</div>
          </Link>
          <Link to="/projects">
            <div className="icon">Portfolio</div>
          </Link>
          <Link to="/gallery">
            <div className="icon">Travel Gallery</div>
          </Link>
          <Link to='/skills'>
            <div className="icon">Skills</div>
          </Link>
          
        </div>
    </div>
  )
}

export default NavBar