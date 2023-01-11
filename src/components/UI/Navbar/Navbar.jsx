import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import classes from './Navbar.module.css';
import MyButton from '../button/MyButton';
import { AuthContext } from "../../../context";



const Navbar = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth')

    }

    return (
        <>
            <div className='navbar'>
                <div className='navbar__links'>
                    <Link to="/posts" className={classes.NavBarLinks}>Посты</Link>
                    <Link to="/about" className={classes.NavBarLinks} >О блоге</Link>
                    {/* <Link to="/404" className={classes.NavBarLinks} >404</Link>
                    <Link to="/login" className={classes.NavBarLinks} >login</Link> */}
                    {isAuth
                        ?
                        <MyButton onClick={logout}>
                            Выйти
                        </MyButton>
                        : <div></div>
                        }




                </div>
            </div>
        </>
    )
}

export default Navbar