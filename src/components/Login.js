import React from 'react';

function Login() {
    return (
        <div className="register">
            <h2 className="register__title">Вход</h2>
            <form className="register__form">
                <input className="register__input" placeholder="Email" type="email" />
                <input className="register__input" placeholder="Пароль" type="password" />
                <button className="register__button">Войти</button>
            </form>
        </div>
    );
}

export default Login;