import React from 'react';
import headerLogo from '../images/logo.svg';
import { Link, useLocation } from 'react-router-dom';

function Header(props) {

    const userLocation = useLocation();

    return (
        <header className="header page__header">
            <a href="#" target="_self"><img className="header__logo" src={headerLogo}
                alt="Логотип Место" /></a>
            <>
                {
                    userLocation.pathname === '/sign-in' ?
                        <Link to="/sign-up" className="header__link">Регистрация</Link> :
                        <Link to="/sign-in" className="header__link">Войти</Link>
                }
            </>
        </header>
    );
}

export default Header;