import React from 'react';
import {useState, useEffect} from 'react';
import Form from "../components/utils/Form"
import PokemonList from "../components/pokemons/PokemonList";
import PacmanLoader from "react-spinners/PacmanLoader";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Pokemons = () => {

    let navigate = useNavigate();
    const [isLoading, setLoading] = useState(true);
    const [hasError, setError] = useState(false);
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState("")

    const fetchApi = async () => {
      try {
        axios.get(
          process.env.REACT_APP_LOCALAPI+"/pokemons"
        ).then((response)=>{
          console.log(response.data)
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
    
  
    const handleChange = (e) => {
        setFilter(e.target.value);
    };
  
    const constfilterData= (data, filter) =>{

        return data.filter( (pkmn) => pkmn.name.english.toLowerCase().includes(filter.toLowerCase()))
    }
  
    const handleClick = (pkmn) => {
      navigate(`/pokemons/${pkmn.id}`);
  };
  
    if (hasError) return <p>Une erreur est survenue...</p>;
  
    return (
      <>
        <h1>Pokédex</h1> 
        <div className="pokedex-container">
        <Form handleChange={handleChange}></Form>
          {isLoading ? (
            <PacmanLoader />
          ) : (
            <PokemonList props={{pokemons: constfilterData(data,filter)}} handleClick={handleClick} />
          )}
        </div>
      </>
    );
  };
  
export default Pokemons;