import axios from "axios";
import { useEffect, useState } from "react";

function PokeApi() {
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState();
  const url = "https://pokeapi.co/api/v2/pokemon/cubone";

  useEffect(() => {
    axios(url).then((res) => {
      setPokemon(res.data);
      setTimeout(() => {
        setLoading(false);
      }, 850);
    });
  }, []);

  return (
    <div>
      {loading ? (
        <h5>Cargando pokemon...</h5>
      ) : (
        <>
          <h1 className="pokeName">{pokemon.name}</h1>
          <img src={pokemon.sprites.front_default} alt="" width={200} />
        </>
      )}
    </div>
  );
}

export default PokeApi;
