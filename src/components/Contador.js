import React, { useState, useEffect } from 'react';


const Contador = () => {
    const defaultCuenta = 100;
    const [cuenta, setCuenta] = useState(defaultCuenta);

    const aumentar = () => {
        setCuenta(cuenta + 1);
    };

    const disminuir = () => {
        setCuenta(cuenta - 1);
    };

    const reset = () => {
        setCuenta(defaultCuenta);
    };

    useEffect(() => {
        console.log(`El contacdor va en ${cuenta}`)
    }, [cuenta]);

    return (
        <div>
            <center>
                <h1>{cuenta}</h1>
                <button onClick={aumentar}>Aumentar</button>
                <button onClick={disminuir}>Disminuir</button>
                <button onClick={reset}>Reset</button>
            </center>
        </div>
    )
}

export default Contador;