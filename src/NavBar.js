import React from 'react';
import { useState } from 'react';
import {
  Nav,
  NavLink,
  NavMenu,
} from './NavBarElements';
import styles from './NavBar.module.css';


const NavBar = () => {
    // adding the states 
    const [isActive, setIsActive] = useState(false);

    //add the active class
    const toggleActiveClass = () => {
        setIsActive(!isActive);
    };

    //clean up function to remove the active class
    const removeActive = () => {
        setIsActive(false)
    };


    return (
        <Nav className={`${styles.navBar}`}>
            <NavMenu className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
            <NavLink to='/' className={`${styles.navLink}`} onClick={removeActive} >Home</NavLink>
            <NavLink to='/about-me' className={`${styles.navLink}`} onClick={removeActive} >About Me</NavLink>
            <NavLink to='/resume' className={`${styles.navLink}`} onClick={removeActive} >Resume</NavLink>
            </NavMenu>
            <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`}  onClick={toggleActiveClass}>
                <span className={`${styles.bar}`}></span>
                <span className={`${styles.bar}`}></span>
                <span className={`${styles.bar}`}></span>
            </div>
        </Nav>
    );
};
  
export default NavBar;