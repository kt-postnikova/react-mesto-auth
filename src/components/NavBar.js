import React from 'react';

function NavBar(props) {

    return (
        <div className="navbar">
            <p className="navbar__email">{props.email}</p>
            <button onClick={props.onSignOut} className="navbar__button">Выйти</button>
        </div>
    );
}

export default NavBar;