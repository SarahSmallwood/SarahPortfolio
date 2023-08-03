import React from "react";
import { Link } from "react-router-dom";
// import Projects from "./Projects"


function NavBar() {
    
  return (
    <div className="Navbar">
        <div className="header">
          <Link to="/">
            <div>Home</div>
          </Link>
        <Link to="/Gallery">
            <div>Travel Gallery</div>
        </Link>
        </div>
    </div>
  )
}

export default NavBar