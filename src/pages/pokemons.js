import React from 'react';
import { useState, useEffect } from 'react';
import Form from "../components/utils/Form"
import PokemonList from "../components/pokemons/PokemonList";
import RiseLoader from "react-spinners/RiseLoader";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import {AiOutlinePlusCircle} from "react-icons/ai"

const Pokemons = () => {

  let navigate = useNavigate();
  const [isLoading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("")

  const fetchApi = async () => {
    try {
      axios.get(
        process.env.REACT_APP_LOCALAPI + "/pokemons"
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


  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  const constfilterData = (data, filter) => {

    return data.filter((pkmn) => pkmn.name.english.toLowerCase().includes(filter.toLowerCase()))
  }

  const handleClick = (pkmn) => {
    navigate(`/pokemons/${pkmn.id}`);
  };

  if (hasError) return <p>Une erreur est survenue...</p>;

  return (
    <>
      <h1>Pokédex</h1>
      <NavLink className="d-flex flex-row-reverse" to={{ pathname: "/pokemons/create" , props: { req: "create" } }}>
        <AiOutlinePlusCircle color="red" className="svg" size={32} />
      </NavLink>
      <div className="pokedex-container">
        <Form handleChange={handleChange}></Form>
        {isLoading ? (
          <div className='d-flex align-items-center justify-content-center' style={{ height: "50vh" }}>
            <RiseLoader color="red" size={50} />
          </div>
        ) : (
          <PokemonList props={{ pokemons: constfilterData(data, filter) }} handleClick={handleClick} />
        )}
      </div>
    </>
  );
};

export default Pokemons;