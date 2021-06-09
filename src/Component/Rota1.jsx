import { useState } from "react";

const Rota1 = (props) =>{

    //java script 
    
    //html ou outros

    //useState hook, atualiza os dados em tempo real




    const[count, setCount] = useState(0);


    return (
        <div>

            <h1>Olá, essa é a rota 1</h1>

            <h2>UseState:{count}</h2>

            <button onClick = {() =>setCount (count-1)}>-1</button> {/* quando clicar diminui o count*/}
            <button onClick = {() =>setCount (count+1)}>+1</button> {/* quando clicar aumenta o count*/}
            <br/>
            <button onClick = {() =>setCount (count-1000)}>-1000</button>
            <button onClick = {() =>setCount (count+1000)}>+1000</button>
            <br/>
            <button onClick = {() =>setCount (count-100)}>-100</button> 
            <button onClick = {() =>setCount (count+100)}>+100</button>



        </div>
    );


}

export default Rota1;