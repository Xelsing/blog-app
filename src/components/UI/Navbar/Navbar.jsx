import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar__links'>
                <Link to="/" className={classes.NavBarLinks}>Посты</Link>
                <Link to="/about" className={classes.NavBarLinks} >О блоге</Link>
            </div>
        </div>
    )
}

export default Navbar