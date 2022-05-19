import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import PokemonInfo from "../components/pokemons/PokemonInfo"
import PokemonImg from "../components/pokemons/PokemonImg"
import PacmanLoader from "react-spinners/PacmanLoader";
import GoBack from "../components/utils/GoBack"


const DetailsPokemon = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [hasError, setError] = useState(false);
  let { id } = useParams();


  const fetchApi = async () => {
    try {
      axios.get(
        process.env.REACT_APP_LOCALAPI + "/pokemons/" + id
      ).then((response) => {
        setData(response.data);
        setLoading(false);

      })
    } catch (err) {
      setError(true);
      throw err;
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);






  if (hasError) return <p>Une erreur est survenue...</p>;

  return (
    <>
      {isLoading ? (
        <PacmanLoader />
      ) : (
        <>
          <GoBack />
          <div className='container-fluid'>
            <div className='row shadow' style={{ position: "relative", height: "75vh", borderRadius: "20px" }}>
              <PokemonImg props={data} />
              <PokemonInfo props={data} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default DetailsPokemon;