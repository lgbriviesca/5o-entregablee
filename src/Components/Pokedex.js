import {React, useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PokeCard from "./PokeCard";

const Pokedex = () => {

    const user = useSelector(state => state.userName);
    const navigate = useNavigate();
    const [pokemons, setPokemons] = useState ([]);
    const [pokemonName, setPokemonName] = useState("");
    const [types, setTypes] = useState([]);

// ------- paginación
const [itemsNumber, setItemsNumber] = useState(8);
const [page, setPage] = useState(1);
    const lastIndex = page * itemsNumber;
    const firstIndex = lastIndex - itemsNumber;
    const pokemonPaginated = pokemons?.slice(firstIndex, lastIndex);
    const totalPages = Math.ceil(pokemons?.length / itemsNumber);

    const handleItems= (e) => {
        console.log(e.target.value)
     setItemsNumber(e.target.value)
      };

// -------   


    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1126")
      .then((res) =>  setPokemons(res.data.results));  
      axios.get("https://pokeapi.co/api/v2/type")
      .then((res) =>  setTypes(res.data.results))
    }, []);


// ------ búsqueda
     const submit = (e) => {
        e.preventDefault();
        navigate(`/pokedex/${pokemonName}`);
      };
// ------ búsqueda

const handleType= (e) => {
    console.log(e.target.value)
  axios.get(e.target.value).then((res) => setPokemons(res.data.pokemon));
  };

  console.log(pokemons)

    return (
        <div>

            <h1>Mi Pokedex</h1>
            <h2>Hola, {user} </h2>

            <div className='selectItems'>
                <select onChange={handleItems}>
                        <option value={4} > 4 </option>
                        <option value={8} > 8 </option>
                        <option value={12} > 12 </option>
                        <option value={16} > 16 </option>
                        <option value={20} > 20 </option>
                </select>
            </div>

            <div className='select'>
                <select onChange={handleType}>
                    {types.map((type) => (
                        <option key={type.url} value={type.url}>
                            {type.name}
                        </option>
                    ))}
                </select>
            </div>
            <form className="input-container" onSubmit={submit}>
                <label htmlFor="pokemon-name">Busca por nombre</label>
                <input
                    type="text"
                    id="pokemon-name"
                    value={pokemonName}
                    onChange={(e) => setPokemonName(e.target.value)}
                />
                <button>Buscar</button>
            </form>
            <ul className='pokemonList'>
                {pokemonPaginated.map((pokemon) => (
                    <PokeCard pokemonUrl={pokemon.url ? pokemon.url : pokemon.pokemon.url}
                        key={pokemon.url} />
                ))}
            </ul>
            <button onClick={() => setPage(page - 1)} disabled={page <= 1}>
                Pagina previa
            </button>
            {page} / {totalPages}
            <button onClick={() => setPage(page + 1)} disabled={page >= totalPages}>
                Pagina siguiente
            </button>

        </div>
    );
};

export default Pokedex;