import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ChoosePokemon from '../components/teams/ChoosePokemon';
import PokemonList from '../components/pokemons/PokemonList';
import {BiX} from "react-icons/bi";
import Form from "../components/utils/Form"
import {AiOutlinePlusCircle} from "react-icons/ai"
import GoBack from "../components/utils/GoBack"

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

        const team = {name: name, pokemons: pokemons };
        axios.post(process.env.REACT_APP_LOCALAPI + '/teams', team).then(navigate(-1))

    }

    const handlePick = (i) => {
        setIndex(i);
        setPick(true);
    }

    const handleDelete = (e, i) => {
      let tempData  = {...pokemons};
      let tempArray = Object.keys(tempData).map(key => tempData[key]);
      tempArray[i] = { id: 0}
      setPokemons(tempArray);
      setPick(false);
      e.stopPropagation(); 
  }

    const handleChange = (e) => {
        setName(e.target.value);
    }

    const handleChangeFilter = (e) => {
      setFilter(e.target.value);
  };

    const handleClickList = (pkmn) => {
        setPick(false)
        let tempData = pokemons;
        tempData[index] = {id:pkmn.id,name: pkmn.name.english,type:pkmn.type}
        setPokemons(tempData);
    }

    return (
        <>
            <GoBack props={"/teams"}/>
            <div className='justify-content-center'>
                <div className='flex'>
                  <input maxlength="15" placeholder='Team name' onChange={handleChange}></input>
                  <AiOutlinePlusCircle className="svg" size={32} color="red" onClick={createTeam}/>
                </div>
                
                
                <ChoosePokemon props={{ pokemons: pokemons }} handlePick={handlePick} handleDelete={handleDelete}/>
            </div>

            {pick &&
                <>
                  <BiX className="svg" size={20} onClick={()=>{setPick(false)}}/>
                  <Form handleChange={handleChangeFilter}></Form>
                  <PokemonList props={{pokemons: constfilterData(data,filter)}} handleClick={handleClickList}/>
                </>
            }
        </>


    );
};

export default CreateTeam;