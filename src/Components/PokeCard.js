import {React, useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

const PokeCard = ({pokemonUrl}) => {

        const [pokemon, setPokemon] = useState({});
      
        useEffect(() => {
          axios.get(pokemonUrl).then((res) => setPokemon(res.data));
        }, [pokemonUrl]);

console.log(pokemon)

    return (
        <div>
            <h3>{pokemon.name} </h3>
            <li key={pokemon.url}>
            <Link to={`/pokedex/${pokemon.id}`} className='pokemonCard'>
            <img className='imgCard' src={pokemon.sprites?.other.dream_world.front_default} alt="" /> </Link>
          </li>
        </div>
    );
};

export default PokeCard;