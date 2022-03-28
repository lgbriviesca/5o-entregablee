import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PokedexInfo = () => {

    const { id } = useParams();
    const [pokemon, setPokemon] = useState({});


useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => setPokemon(res.data));
  }, [id]);



    return (
        <div>
            <h1>Este es PokedexInfo</h1>
            <h1>{pokemon.name}</h1>
        <p>Altura: {pokemon.height}</p>
        <p>Peso: {pokemon.weight}</p>
  <img src={pokemon.sprites?.other.dream_world.front_default} alt="" />
 
        </div>
    );
};

export default PokedexInfo;