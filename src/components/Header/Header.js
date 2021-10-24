import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <NavLink to='/services'>Services</NavLink>
            <NavLink to='/getservices'>Get Services</NavLink>
        </div>
    );
};

export default Header;