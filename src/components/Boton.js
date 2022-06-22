import React from 'react';

function Boton({ nameButton, isContador, fun }) {
    return (
        <button
            className={isContador ? 'click-btn' : 'restart-btn'}
            onClick={fun}>
            {nameButton}
        </button>
    );
}

export default Boton;