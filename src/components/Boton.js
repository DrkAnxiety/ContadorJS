import React from 'react';
/* 
 * Propiedades de nuestro componente (nameButton, isContador, fun)
 * nameButton es para el nombre del boton
 * isContador es un booleano para anadir la clase de estilo a nuestro boton
 * fun es una funcion para manejar los clicks
 */
function Boton({ nameButton, isContador, clickFunction }) {
    return (
        <button
            className={isContador ? 'click-btn' : 'restart-btn'}
            onClick={clickFunction}>
            {nameButton}
        </button>
    );
}

export default Boton;