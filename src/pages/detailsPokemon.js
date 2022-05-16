import React from 'react';
import {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import PokemonInfo from "../components/pokemon-info/pokemonInfo"
import PokemonImg from "../components/pokemon-info/pokemonImg"

const DetailsPokemon = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [hasError, setError] = useState(false);
    let { id } = useParams();
    

    const fetchApi = async () => {
      try {
        fetch(
            process.env.REACT_APP_LOCALAPI+"/pokemons/"+id
        ).then(response => {
            return response.json();
          })
          .then((data)=>{
            setData(data);
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
        {data &&
        <>
            <PokemonImg props={data}/>
            <PokemonInfo props={data}/>
        </>
        }


      </>
    );
  };
  
export default DetailsPokemon;