import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ChoosePokemon from '../components/teams/ChoosePokemon';
import PokemonList from '../components/pokemons/PokemonList';

const CreateTeam = () => {

    const navigate = useNavigate();
    const [name, setName] = useState("default name");
    const [pokemons, setPokemons] = useState([{ id: 0 }, { id: 0 }, { id: 0 }, { id: 0 }, { id: 0 }, { id: 0 }])
    const [pick, setPick] = useState(false)
    const [index, setIndex] = useState(null)
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState("")


    const fetchApi = async () => {
      try {
        axios.get(
          process.env.REACT_APP_LOCALAPI+"/pokemons"
        ).then((response)=>{
          console.log(response.data)
            setData(response.data);
      
          })
      } catch (err) {

        throw err;
      }
    };
  
    useEffect(() => {
        fetchApi();
      }, []);
    
  
    const constfilterData= (data, filter) =>{

        return data.filter( (pkmn) => pkmn.name.english.toLowerCase().includes(filter.toLowerCase()))
    }

    const createTeam = () => {

        const team = { name: name, pokemons: pokemons };
        axios.post(process.env.REACT_APP_LOCALAPI + '/teams', team).then(navigate(-1))

    }

    const handleClick = (i) => {
        setIndex(i);
        setPick(true);
    }

    const handleChange = (e) => {
        setName(e.target.value);
    }

    const handleClickList = (pkmn) => {
        console.log(pkmn)
        setPick(false)
        let tempData = pokemons;
        tempData[index] = {id:pkmn.id,name: pkmn.name.english}
        setPokemons(tempData);
    }

    return (
        <>
            <div className='justify-content-center'>
                <input maxlength="15" onChange={handleChange}></input>
                <button onClick={createTeam}></button>
                <ChoosePokemon props={{ pokemons: pokemons }} handleClick={handleClick} />
            </div>

            {pick &&
                <PokemonList props={{pokemons: constfilterData(data,filter)}} handleClick={handleClickList}/>
            }
        </>


    );
};

export default CreateTeam;