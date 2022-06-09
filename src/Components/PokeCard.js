import {React, useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

const PokeCard = ({pokemonUrl}) => {

        const [pokemon, setPokemon] = useState({});
      
        useEffect(() => {
          axios.get(pokemonUrl).then((res) => setPokemon(res.data));
        }, [pokemonUrl]);

console.log(pokemon.types?.[0].type.name)

 // -------- color 

 const [color, setColor] = useState("white")
 const [backgroundColor, setBackgroundColor] = useState("white")

useEffect(() => {
      if (pokemon.types?.[0].type.name === "grass") { setColor("darkseagreen")
 } else if (pokemon.types?.[0].type.name === "water") { setColor("lightskyblue")
} else if (pokemon.types?.[0].type.name === "fire") { setColor("rgb(216, 98, 98")
} else if (pokemon.types?.[0].type.name === "bug") { setColor("rgb(142,129,0)")
} else if (pokemon.types?.[0].type.name === "poison") { setColor("rgb(190, 77, 255)")
} else if (pokemon.types?.[0].type.name === "electric") { setColor("rgb(255, 217, 0)")
} else if (pokemon.types?.[0].type.name === "ground") { setColor("rgb(109, 100, 53)")
} else if (pokemon.types?.[0].type.name === "flying") { setColor("rgb(113, 255, 248)")
} else if (pokemon.types?.[0].type.name === "fairy") { setColor("rgb(255, 211, 218)")
} else if (pokemon.types?.[0].type.name === "fighting") { setColor("rgb(192, 93, 0)")
} else if (pokemon.types?.[0].type.name === "psychic") { setColor("gray")
} else if (pokemon.types?.[0].type.name === "rock") { setColor("rgb(173, 167, 131)")
} else if (pokemon.types?.[0].type.name === "ghost") { setColor("rgb(111, 96, 134)")
} else if (pokemon.types?.[0].type.name === "ice") { setColor("rgb(208, 234, 251)")
} else if (pokemon.types?.[0].type.name === "dragon") { setColor("rgba(5, 61, 98, 0.685)")
} else if (pokemon.types?.[0].type.name === "dark") { setColor("rgb(49, 27, 56)")
} else if (pokemon.types?.[0].type.name === "steel") { setColor("rgba(160, 152, 165, 0.726)")
 } else { setColor("rgb(126, 126, 126)"); 
    }
  }, [pokemon.types]);
  
  useEffect(() => {
    if (pokemon.types?.[0].type.name === "grass") { setBackgroundColor("linear-gradient(180deg, rgba(26,106,0,1) 0%, rgba(143,188,143,1) 100%)")
} else if (pokemon.types?.[0].type.name === "water") { setBackgroundColor("linear-gradient(0deg, rgba(146,210,255,1) 0%, rgba(0,116,198,1) 77%)")
} else if (pokemon.types?.[0].type.name === "fire") { setBackgroundColor("linear-gradient(180deg, rgba(216,98,98,1) 0%, rgba(255,139,19,1) 49%)")
} else if (pokemon.types?.[0].type.name === "bug") { setBackgroundColor("linear-gradient(0deg, rgba(221,248,98,1) 0%, rgba(142,129,0,1) 67%)")
} else if (pokemon.types?.[0].type.name === "poison") { setBackgroundColor("linear-gradient(0deg, rgba(190,77,255,1) 0%, rgba(70,34,107,1) 75%)")
} else if (pokemon.types?.[0].type.name === "electric") { setBackgroundColor("linear-gradient(0deg, rgba(255,246,196,1) 0%, rgba(255,217,0,1) 100%)")
} else if (pokemon.types?.[0].type.name === "ground") { setBackgroundColor("linear-gradient(0deg, rgba(119,115,95,1) 0%, rgba(64,45,0,1) 100%)")
} else if (pokemon.types?.[0].type.name === "flying") { setBackgroundColor("linear-gradient(0deg, rgba(113,255,248,1) 0%, rgba(0,98,128,1) 100%)")
} else if (pokemon.types?.[0].type.name === "fairy") { setBackgroundColor("linear-gradient(0deg, rgba(255,211,218,1) 0%, rgba(255,74,177,1) 100%)")
} else if (pokemon.types?.[0].type.name === "fighting") { setBackgroundColor("linear-gradient(0deg, rgba(192,93,0,1) 0%, rgba(89,43,0,1) 100%)")
} else if (pokemon.types?.[0].type.name === "psychic") { setBackgroundColor("gray")
} else if (pokemon.types?.[0].type.name === "rock") { setBackgroundColor("linear-gradient(0deg, rgba(173,167,131,1) 0%, rgba(0,0,0,1) 100%)")
} else if (pokemon.types?.[0].type.name === "ghost") { setBackgroundColor("linear-gradient(0deg, rgba(111,96,134,1) 0%, rgba(56,56,56,1) 100%)")
} else if (pokemon.types?.[0].type.name === "ice") { setBackgroundColor("rgb(208, 234, 251)")
} else if (pokemon.types?.[0].type.name === "dragon") { setBackgroundColor("rgba(5, 61, 98, 0.685)")
} else if (pokemon.types?.[0].type.name === "dark") { setBackgroundColor("linear-gradient(0deg, rgba(79,44,91,1) 0%, rgba(0,0,0,1) 100%)")
} else if (pokemon.types?.[0].type.name === "steel") { setBackgroundColor("linear-gradient(180deg, rgba(90,92,116,1) 0%, rgba(255,255,255,1) 100%)")
} else { setBackgroundColor("linear-gradient(0deg, rgba(148,148,148,1) 0%, rgba(0,0,0,1) 100%)"); 
  }
}, [pokemon.types]);

  
console.log(pokemon)
    return (
        <div >
            <li key={pokemon.url} className='try' >
            <Link to={`/pokedex/${pokemon.id}`} className='pokemonCard' style={{ background: backgroundColor }}>
            
              <div className='pokemonIdCOintainer' >
                <h6>ID </h6>
              <h5 className='pokemonId'> {pokemon.id} </h5>
              </div>
              <div className='whiteBackground'></div>
              <div className='infoCard'>           
                 <img className='imgCard' src={pokemon.sprites?.other.dream_world.front_default} alt="" /> 
                 <p className='pokemonTitle' style={{ color: color }}>{pokemon.name}</p> 
                 <p className='pokemonType'>  {pokemon.types?.[0].type.name === "normal" ? "normal" : "WWW" && 
                        pokemon.types?.[0].type.name === "water" ? "agua" : "WWW" &&
                        pokemon.types?.[0].type.name === "grass" ? "hierba" : "lll" && 
                        pokemon.types?.[0].type.name === "flying" ? "volador" : "lll" && 
                        pokemon.types?.[0].type.name === "poison" ? "veneno" : "lll" && 
                        pokemon.types?.[0].type.name === "electric" ? "eléctrico" : "lll" && 
                        pokemon.types?.[0].type.name === "bug" ? "bicho" : "lll" && 
                        pokemon.types?.[0].type.name === "dragon" ? "dragón" : "lll" && 
                        pokemon.types?.[0].type.name === "steel" ? "acero" : "lll" && 
                        pokemon.types?.[0].type.name === "psychic" ? "psíquico" : "lll" && 
                        pokemon.types?.[0].type.name === "fairy" ? "hada" : "lll" && 
                        pokemon.types?.[0].type.name === "fighting" ? "lucha" : "lll" &&
                        pokemon.types?.[0].type.name === "ice" ? "hielo" : "lll" && 
                        pokemon.types?.[0].type.name === "ground" ? "tierra" : "lll" && 
                        pokemon.types?.[0].type.name === "fire" ? "fuego" : "lll" &&
                        pokemon.types?.[0].type.name === "rock" ? "roca" : "lll" && 
                        pokemon.types?.[0].type.name === "ghost" ? "fantasma" : "lll" &&
                        pokemon.types?.[0].type.name === "dark" ? "oscuro" : "lll" &&
                        pokemon.types?.[0].type.name === "shadow" ? "sombra" : "desconocido"   } 
                        { pokemon.types?.[1]?.type.name === " " ? " " : " " && 
                        pokemon.types?.[1]?.type.name === "flying" ? "/volador" : " " && 
                        pokemon.types?.[1]?.type.name === "poison" ? "/veneno" : " " && 
                        pokemon.types?.[1]?.type.name === "electric" ? "/eléctrico" : " " && 
                        pokemon.types?.[1]?.type.name === "bug" ? "/bicho" : " " && 
                        pokemon.types?.[1]?.type.name === "dragon" ? "/dragón" : " " && 
                        pokemon.types?.[1]?.type.name === "steel" ? "/acero" : " " && 
                        pokemon.types?.[1]?.type.name === "psychic" ? "/psíquico" : " " && 
                        pokemon.types?.[1]?.type.name === "fairy" ? "/hada" : " " && 
                        pokemon.types?.[1]?.type.name === "fighting" ? "/lucha" : " " &&
                        pokemon.types?.[1]?.type.name === "ice" ? "/hielo" : " " && 
                        pokemon.types?.[1]?.type.name === "ground" ? "/tierra" : " " && 
                        pokemon.types?.[1]?.type.name === "fire" ? "/fuego" : " " &&
                        pokemon.types?.[1]?.type.name === "rock" ? "/roca" : " " && 
                        pokemon.types?.[1]?.type.name === "grass" ? "/hierba" : "ll" &&
                        pokemon.types?.[1]?.type.name === "ghost" ? "/fantasma" : " " } 
                        </p>
                 <p className='pokemonDescription'>Tipo</p> 
                 <div className='cardLine'></div>
                 <div className='cardInfoGrid'>
         <div> <p className='pokemonDescription'> EXPERIENCIA</p>   <p style={{ color: color }}> {pokemon.base_experience}</p> </div>    
         <div> <p className='pokemonDescription'> ATAQUE</p> <p style={{ color: color }}> {pokemon.stats?.[1].base_stat}</p> </div> 
         <div> <p className='pokemonDescription'> VELOCIDAD</p><p style={{ color: color }}> {pokemon.stats?.[5].base_stat}</p> </div>    
         <div> <p id="movs" className='pokemonDescription'> NUMERO DE MOVIMIENTOS</p><p style={{ color: color }}> {pokemon.moves?.length}</p> </div>
     
                </div> 
          
         
          </div>
    </Link>
          </li>
        </div>
    );
};

export default PokeCard;