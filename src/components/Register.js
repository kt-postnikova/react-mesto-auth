import React from 'react';
import { Link } from 'react-router-dom';

function Register() {
    return (
        <div className="register">
            <h2 className="register__title">Регистрация</h2>
            <form className="register__form">
                <input className="register__input" placeholder="Email" type="email" />
                <input className="register__input" placeholder="Пароль" type="password" />
                <button className="register__button">Зарегистрироваться</button>
                <p className="register__link">Уже зарегистрированы? <Link to="/sign-in" className="register__link">Войти</Link></p>
            </form>
        </div>
    );
}

export default Register;