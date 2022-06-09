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
} else if (pokemon.types?.[0].type.name === "steel") { setBackgroundColor("linear-gradient(0deg, rgba(90,92,116,1) 0%, rgba(255,255,255,1) 100%)")
} else { setBackgroundColor("linear-gradient(0deg, rgba(148,148,148,1) 0%, rgba(0,0,0,1) 100%)"); 
  }
}, [pokemon.types]);