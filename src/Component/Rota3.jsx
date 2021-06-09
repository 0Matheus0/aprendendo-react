import React, { useEffect, useState } from 'react'

const Rota3 = () =>{

    const [numero, setNumero] = useState(0);
    const [status, setStatus] = useState("");

    useEffect(()=>{

        if (numero % 2 === 0){
            return setStatus ("Par")
        }

        else return setStatus("Impar")


    })

    
    return(
        <div>
            <h1>Olá, essa é a Rota 3</h1>

            <h2>{numero}</h2>
            <h3>{status}</h3>

            <button onClick = {() => setNumero(numero+1)}>INICIAR</button>
            <button onClick = {() => setNumero(0)}>ZERAR</button>

        </div>
    );

}

export default Rota3;