import '../App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import bottom from '../Images/bottom.png';
import top from '../Images/top.png';

const PokedexInfo = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({});
  const [pokemonExpanded, setPokemonExpanded] = useState({});
  const [getEvolutions, setGetEvolutions] = useState('');
  const [evolutions, setEvolutions] = useState({});

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(res => setPokemon(res.data));
  }, [id]);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}/`).then(res => {
      setPokemonExpanded(res.data);
      setGetEvolutions(res.data?.evolution_chain?.url);
    });
  }, [id]);

  useEffect(() => {
    axios.get(`${getEvolutions}`).then(res => setEvolutions(res.data));
  }, [getEvolutions]);

  const speed = pokemon.stats?.[5].base_stat;
  const attack = pokemon.stats?.[1].base_stat;
  const catchRate = pokemonExpanded?.capture_rate;

  const speedIndicator = speed => {
    if (speed <= 36) {
      return 'circle circle1';
    } else if (speed > 36 && speed <= 72) {
      return 'circle circle2';
    } else if (speed > 72 && speed <= 108) {
      return 'circle circle3';
    } else if (speed > 108 && speed <= 144) {
      return 'circle circle4';
    } else if (speed > 144) {
      return 'circle circle5';
    } else return 'circle circle6';
  };

  const attackIndicator = attack => {
    if (attack <= 38) {
      return 'circle circle1';
    } else if (attack > 38 && attack <= 74) {
      return 'circle circle2';
    } else if (attack > 74 && attack <= 110) {
      return 'circle circle3';
    } else if (attack > 110 && attack <= 146) {
      return 'circle circle4';
    } else if (attack > 146) {
      return 'circle circle5';
    } else return 'circle circle6';
  };

  const catchRateIndicator = catchRate => {
    if (catchRate <= 51) {
      return 'circle circle1';
    } else if (catchRate > 52 && catchRate <= 102) {
      return 'circle circle2';
    } else if (catchRate > 103 && catchRate <= 153) {
      return 'circle circle3';
    } else if (catchRate > 154 && catchRate <= 204) {
      return 'circle circle4';
    } else if (catchRate > 205) {
      return 'circle circle5';
    } else return 'circle circle6';
  };

  console.log(speedIndicator(speed));
  console.log(getEvolutions);
  console.log(pokemonExpanded);
  console.log(evolutions);
  console.log(pokemon.sprites?.other.dream_world.front_default);

  return (
    <div className="pokedexInfoTotalContainer">
      <img className="imgTop" src={top} alt="intro" />
      <div className="pokedexInfoGeneralContainer">
        <section className="leftSeccion">
          <div className="contGris">
            <div id="pokemon-wrapper">
              <img src={pokemon.sprites?.other?.home.front_default} alt="" />
            </div>
            <div id="nombreId">
              <h1>{pokemon.name}</h1>
              <h2>{pokemon.id}</h2>
            </div>
          </div>
        </section>
        <section className="rightSeccion">
          {/*           <img src={pokemon.sprites?.back_shiny} alt="" />
          <img src={pokemon.sprites?.back_default} alt="" />
          <img src={pokemon.sprites?.front_default} alt="" />
          <img src={pokemon.sprites?.front_default} alt="" /> */}
          <div className="pokemonTextInfoContainerMain">
            <section className="leftPokemonTextInfoContainer">
              <div className="leftPokemonTextInfoContainerColumns">
                <div className="contGrisInfo">
                  <div className="whiteTextContainerInfo">
                    {' '}
                    <p>Taza de captura:</p>
                  </div>
                </div>
                <div className="yelloTextContainerInfo">
                  {' '}
                  <p>{catchRate} </p>
                </div>
              </div>
              <div className="leftPokemonTextInfoContainerColumns">
                <div className="contGrisInfo">
                  <div className="whiteTextContainerInfo">
                    {' '}
                    <p>Felicidad base:</p>
                  </div>
                </div>
                <div className="yelloTextContainerInfo">
                  {' '}
                  <p>{pokemonExpanded?.base_happiness} </p>
                </div>
              </div>
            </section>
            <section className="rightPokemonTextInfoContainer">
              <div className="leftPokemonTextInfoContainerColumns">
                <div className="contGrisInfo">
                  <div className="whiteTextContainerInfo">
                    {' '}
                    <p>Este pokémon pesa:</p>
                  </div>
                </div>
                <div id="yelloTextContainerInfo">
                  {' '}
                  <p>{pokemon.weight} </p>
                </div>
              </div>
              <div className="leftPokemonTextInfoContainerColumns">
                <div className="contGrisInfo">
                  <div className="whiteTextContainerInfo">
                    {' '}
                    <p>Este pokémon mide:</p>
                  </div>
                </div>
                <div className="yelloTextContainerInfo">
                  {' '}
                  <p> {pokemon.height} </p>
                </div>
              </div>
            </section>
          </div>
          <div className="pokemonTextInfoContainerBelow">
            <div className="pokemonTextInfoContainerBelowBlueScreen">
              <div className="pokemonTextInfoContainerBelowBlueScreenColumns">
                <p>Género: {pokemonExpanded?.genera?.[5].genus}</p>
                <p>
                  Cambia de forma:{' '}
                  {pokemonExpanded?.forms_switchable === 'false' ? 'no' : 'sí'}
                </p>
                <p>
                  Ritmo de crecimiento:{' '}
                  {pokemonExpanded?.growth_rate?.name === 'slow'
                    ? 'lento'
                    : 'fluctuante' &&
                      pokemonExpanded?.growth_rate?.name === 'medium-slow'
                    ? 'lento-medio'
                    : 'fluctuante' &&
                      pokemonExpanded?.growth_rate?.name === 'medium'
                    ? 'medio'
                    : 'fluctuante' &&
                      pokemonExpanded?.growth_rate?.name === 'fast'
                    ? 'rápido'
                    : 'fluctuante' &&
                      pokemonExpanded?.growth_rate?.name ===
                        'slow-then-very-fast'
                    ? 'lento, después rápido'
                    : 'fluctuante' &&
                      pokemonExpanded?.growth_rate?.name ===
                        'fast-then-very-slow'
                    ? 'rápido, después lento'
                    : 'fluctuante'}
                </p>
              </div>
              <div className="pokemonTextInfoContainerBelowBlueScreenColumns">
                <p>
                  Evoluciona de:{' '}
                  {pokemonExpanded?.evolves_from_species?.name === undefined
                    ? 'este pokémon no es resultado de niguna evolución'
                    : pokemonExpanded?.evolves_from_species?.name}
                </p>
                <p>
                  Evoluciona a:{' '}
                  {evolutions?.chain?.evolves_to?.[0]?.evolves_to?.[0]?.species
                    .name === undefined
                    ? 'este pokémon no tiene más evoluciones'
                    : evolutions?.chain?.evolves_to?.[0]?.evolves_to?.[0]
                        ?.species.name}
                </p>
                <p>Variedades:</p>
                <div>
                  {pokemonExpanded?.varieties?.map(variety => (
                    <p>{variety?.pokemon?.name}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="barsContainer">
            <div class="contenedor">
              <div class="progreso pro">
                <div class={speedIndicator(speed)}></div>
                <h1>{speed}</h1>
                <h2>Velocidad</h2>
              </div>
            </div>
            <div class="contenedor">
              <div class="progreso pro">
                <div class={attackIndicator(attack)}></div>
                <h1>{attack}</h1>
                <h2>Ataque</h2>
              </div>
            </div>
            <div class="contenedor">
              <div className="progreso pro2">
                <div className={catchRateIndicator(catchRate)}></div>
                <h1>{catchRate}</h1>
                <h2>Taza de captura</h2>
              </div>
            </div>
          </div>
          <div className="grayTextContainer">
            <div className="whiteTextContainer">
              {pokemonExpanded.flavor_text_entries
                ?.slice(0, 40)
                ?.map(textLine => (
                  <p>
                    {textLine.language.name === 'es'
                      ? textLine.flavor_text
                      : ''}
                  </p>
                ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PokedexInfo;
