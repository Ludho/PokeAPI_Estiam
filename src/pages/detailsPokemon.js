import React from 'react';
import {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import axios from 'axios';
import PokemonInfo from "../components/pokemons/PokemonInfo"
import PokemonImg from "../components/pokemons/PokemonImg"
import PacmanLoader from "react-spinners/PacmanLoader";

const DetailsPokemon = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [hasError, setError] = useState(false);
    let { id } = useParams();
    

    const fetchApi = async () => {
      try {
        axios.get(
            process.env.REACT_APP_LOCALAPI+"/pokemons/"+id
        ).then((response)=>{
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
              <PokemonImg props={data}/>
              <PokemonInfo props={data}/>
            </>
          )}
      </>
    );
  };
  
export default DetailsPokemon;