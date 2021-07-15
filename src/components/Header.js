import React from 'react';
import NavBar from './NavBar';
import headerLogo from '../images/logo.svg';
import { Link, useLocation } from 'react-router-dom';

function Header(props) {

    const userLocation = useLocation();

    return (
        <header className="header page__header">
            <a href="#" target="_self"><img className="header__logo" src={headerLogo}
                alt="Логотип Место" /></a>
            {
                props.loggedIn ?
                    <NavBar email={props.email} onSignOut={props.onSignOut} /> :
                    (<>{
                        userLocation.pathname === '/signin' ?
                            <Link to="/signup" className="header__link">Регистрация</Link> :
                            <Link to="/signin" className="header__link">Войти</Link>
                    } </>)
            }
        </header>
    );
}

export default Header;