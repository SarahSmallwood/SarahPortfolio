import React from 'react';
import { slide as Menu } from 'react-burger-menu';

const CustomBurgerIcon = () => <img src="https://i.pinimg.com/originals/26/9d/d1/269dd16fa1f5ff51accd09e7e1602267.png" alt="white menu bar" className='whiteMenu'/> ;

const NavMenu = () => {
  return (
    <Menu customBurgerIcon={ <CustomBurgerIcon/>} className='menuBar'>
      <a id="portfolio" className="menu-item" href="/Gallery">PORTFOLIO</a>
      <a id="travel" className="menu-item" href="/Travel">TRAVEL GALLERY</a>
      <a id="skills" className="menu-item" href="/Skills">SKILLS</a>
      <a id="aboutme" className="menu-item" href="/AboutMe">ABOUT ME</a>
    </Menu>
  );
};

export default NavMenu;