import { React, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PokeCard from "./PokeCard";
import bottom from "./bottom.png";
import top from "./top.png";

const Pokedex = () => {

    const user = useSelector(state => state.userName);
    const navigate = useNavigate();
    const [pokemons, setPokemons] = useState([]);
    const [pokemonName, setPokemonName] = useState("");
    const [types, setTypes] = useState([]);

    // ------- paginación
    const [itemsNumber, setItemsNumber] = useState(8);
    const [page, setPage] = useState(1);
    const lastIndex = page * itemsNumber;
    const firstIndex = lastIndex - itemsNumber;
    const pokemonPaginated = pokemons?.slice(firstIndex, lastIndex);
    const totalPages = Math.ceil(pokemons?.length / itemsNumber);

    const handleItems = (e) => {
        console.log(e.target.value)
        setItemsNumber(e.target.value)
    };

    // -------   

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1126")
            .then((res) => setPokemons(res.data?.results));
        axios.get("https://pokeapi.co/api/v2/type")
            .then((res) => setTypes(res.data.results));
    }, []);


    // ------ búsqueda
    const submit = (e) => {
        e.preventDefault();
        navigate(`/pokedex/${pokemonName}`);
    };

    // ------ Filtro por tipos
    const handleType = (e) => {
        console.log(e.target.value)
        if (e.target.value === "all") {
            axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1126")
                .then((res) => setPokemons(res.data?.results));
        } else { axios.get(e.target.value).then((res) => setPokemons(res.data.pokemon)); }

    };

    console.log(pokemons)
    console.log(types)

    return (
        <div>

            <img className='imgTop' src={top} alt="intro" />

            <h2 className='welcome'>  <b style={{ color: "rgba(221, 26, 26, 1)" }} >Hola, {user}</b> aquí podrás encontrar tu pokemon favorito </h2>
            <div className='headerNav'>

                <form className="input-container" onSubmit={submit} >
                    <label htmlFor="pokemon-name"></label>
                    <input
                        className='input-container-gap'
                        placeholder='Buscar pokémon por nombre o ID'
                        type="text"
                        id="pokemon-name"
                        value={pokemonName}
                        onChange={(e) => setPokemonName(e.target.value)}
                    />
                    <button className='search-button'>Buscar</button>
                </form>
               
                <div className='select'>
                    <select onChange={handleType} className='selected-type'>
                        {<option value={"all"} > Tipos de pokemon </option>}
                        {types.map((type) => (
                            <option key={type.url} value={type.url}> {type.name === "normal" ? "normal" : "WWW" &&
                                type.name === "water" ? "agua" : "WWW" &&
                                    type.name === "grass" ? "hierba" : "lll" &&
                                        type.name === "flying" ? "volador" : "lll" &&
                                            type.name === "poison" ? "veneno" : "lll" &&
                                                type.name === "electric" ? "eléctrico" : "lll" &&
                                                    type.name === "bug" ? "bicho" : "lll" &&
                                                        type.name === "dragon" ? "dragón" : "lll" &&
                                                            type.name === "steel" ? "acero" : "lll" &&
                                                                type.name === "psychic" ? "psíquico" : "lll" &&
                                                                    type.name === "fairy" ? "hada" : "lll" &&
                                                                        type.name === "fighting" ? "lucha" : "lll" &&
                                                                            type.name === "ice" ? "hielo" : "lll" &&
                                                                                type.name === "ground" ? "tierra" : "lll" &&
                                                                                    type.name === "fire" ? "fuego" : "lll" &&
                                                                                        type.name === "rock" ? "roca" : "lll" &&
                                                                                            type.name === "plant" ? "planta" : "lll" &&
                                                                                                type.name === "ghost" ? "fantasma" : "lll" &&
                                                                                                    type.name === "dark" ? "oscuro" : "lll" &&
                                                                                                        type.name === "shadow" ? "sombra" : "desconocido"}
                            </option>
                        ))}
                    </select>
                </div>
                <div className='selectItems'>
                    <select onChange={handleItems} className='selectedItems'>
                        <option value={8} > Mostrar por página </option>
                        <option value={4} > 4 </option>
                        <option value={8} > 8 </option>
                        <option value={12} > 12 </option>
                        <option value={16} > 16 </option>
                        <option value={20} > 20 </option>
                    </select>
                </div>
            </div>

            <ul className='pokemonList'>
                {pokemonPaginated.map((pokemon) => (
                    <PokeCard pokemonUrl={pokemon.url ? pokemon.url : pokemon.pokemon.url}
                        key={pokemon.url} />
                ))}
            </ul>
            <div className='pagination'>
                <button className='prevnext' onClick={() => setPage(page - 1)} disabled={page <= 1}>
                    <i className="fa-solid fa-angles-left"></i>
                </button>
                <div className='pages'>{page} / {totalPages}</div>
                <button className='prevnext' onClick={() => setPage(page + 1)} disabled={page >= totalPages}>
                    <i className="fa-solid fa-angles-right"></i>
                </button>
            </div>
            <div>
                <img className='imgBottom' src={bottom} alt="intro" />
            </div>
        </div>
    );
};

export default Pokedex;