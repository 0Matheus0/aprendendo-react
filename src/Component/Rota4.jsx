import React, { useState, useEffect } from "react";
import api from "../Service/Api";

const Rota4 = (props) => {
  const [filmes, setFilmes] = useState([]); //([]) array de objetos

  useEffect(() => {
    _loadMovies();
  }, []);

  //carrega filmes 
  const _loadMovies = () => {
    api.get("").then((response)=>{

      //console.log(response.data);

      response.data.forEach(element => { //percorre o array e seta em setFilmes
        //console.log(element.show.name)
        setFilmes(response.data);
    
      });
    });

  };

  return (
    <div>
      <h1>Olá, Essa é a Rota 4</h1>
      {
        filmes.map((item)=>
          <li key={item.show.id}>
            {item.show.name}
          </li>

        )
      }
    </div>
  );
};

export default Rota4;
