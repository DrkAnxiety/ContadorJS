import React from 'react';
import Boton from './Boton';
import '../styleSheets/Contador.css';
import { useState } from 'react';

function Contador() {

    const [number, setNumber] = useState(0);

    const clickFunction = () => {
        setNumber(number + 1);
    };

    const restartFunction = () => {
        setNumber(0);
    };

    return (
        <div className='container'>
            <div id="logo">
                FreeCodeCamp
            </div>
            <div className='contador'>
                {number}
            </div>
            <Boton
                nameButton='Click'
                isContador={true}
                fun={clickFunction} />
            <Boton
                nameButton='Restart'
                isContador={false}
                fun={restartFunction} />
        </div>
    );
}

export default Contador;