import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => {
    return (
        <>
        <div className='navbar'>
            <div className='navbar__links'>
                <Link to="/posts" className={classes.NavBarLinks}>Посты</Link>
                <Link to="/about" className={classes.NavBarLinks} >О блоге</Link>
                <Link to="/404" className={classes.NavBarLinks} >404</Link>
                <Link to="/login" className={classes.NavBarLinks} >login</Link>
            </div>
        </div>
        </>
    )
}

export default Navbar