import React from 'react';
import "./Navbar.css"
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav>
            <NavLink to="/" className='nav-bar'>Home</NavLink>
            <NavLink to="/about" className='nav-bar'>About</NavLink>
            <NavLink to="/portfolio" className='nav-bar'>Portfolio</NavLink>
            <NavLink to="/contact" className='nav-bar'>Contact</NavLink>
            <NavLink to="/blog" className='nav-bar'>Blog</NavLink>
        </nav>
    );
};

export default Navbar;
