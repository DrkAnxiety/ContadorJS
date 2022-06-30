import React, { useState } from 'react';
import Boton from './Boton';
import '../styleSheets/Contador.css';

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
                clickFunction={clickFunction} />
            <Boton
                nameButton='Restart'
                isContador={false}
                clickFunction={restartFunction} />
        </div>
    );
}

export default Contador;