import { useState } from "react";


const Rota2 = () =>{

    const [name, setName] = useState("");

    const clicanobotao = (event) =>{
        setName(event.target.value)

    }
    
    const insert = (escreve) =>{
        setName(escreve.target.value)
    }

    return (
        <div>
            <h1>Olá, essa é rota 2</h1>

            <input value={name} onChange = {insert}/>

            <br/>

            <button onClick = {clicanobotao}>enviar</button>

            <br/>

        </div>
    );
}

export default Rota2;