import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar({children}) {
    return (
        <header>
            <nav className='navbar'>
                <h3 className='navbar-logo'> Blogi<span>fy</span>. </h3>
                {children}
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/blogs">Blogs</NavLink></li>
                    <li><NavLink to="/login">Login</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;