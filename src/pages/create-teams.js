import axios from 'axios';
import React from 'react';
import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const CreateTeam = () => {

    const navigate = useNavigate();
    const [name, setName] = useState("default name");
    const [pokemons, setPokemons] = useState([{id:1,name:"Bulbasaur"}])

    const createTeam=()=>{

        const team = {name: name, pokemons: pokemons};

        axios.post(process.env.REACT_APP_LOCALAPI+'/teams', team).then(navigate(-1))
        
    }

    const handleChange=(e)=>{
        setName(e.target.value);
    }

  return (
    <div>
      <input onChange={handleChange}></input>
      <button onClick={createTeam}></button>
    </div>
  );
};
  
export default CreateTeam;