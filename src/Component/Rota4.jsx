import React, { useState, useEffect } from "react";
import api from "../Service/Api";

const Rota4 = (props) => {
  const [filmes, setFilmes] = useState({}); //({}) para receber objeto

  useEffect(() => {
    _loadMovies();
  }, []);

  const _loadMovies = () => {
    const getMovies = api.get("");

    console.log(getMovies);

    setFilmes(getMovies.data);
  };

  return (
    <div>
      <h1>Olá, Essa é a Rota 4</h1>
        


    </div>
  );
};

export default Rota4;
