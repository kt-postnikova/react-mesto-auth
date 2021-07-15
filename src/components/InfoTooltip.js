import React from 'react';

function InfoTooltip(props) {
    return (
        <div className={`popup popup_type_${props.name} ${props.isOpen ? ('popup_opened') : ''}`}>
            <div className="popup__container">
                <button className="popup__close" onClick={props.onClose} type="button" aria-label="Закрыть"></button>
                <img className="tooltip__image" src={props.image} />
                <p className="tooltip__info">{props.info}</p>
            </div>
        </div>
    );
}

export default InfoTooltip;