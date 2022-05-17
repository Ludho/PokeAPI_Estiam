import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ChoosePokemon from '../components/teams/ChoosePokemon';
import PokemonList from '../components/pokemons/PokemonList';
import { useParams } from "react-router-dom";

const UpdateTeam = () => {

    const navigate = useNavigate();
    const [name, setName] = useState("default name");
    const [pokemons, setPokemons] = useState([])
    const [pick, setPick] = useState(false)
    const [index, setIndex] = useState(null)
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState("")
    const [team, setTeam] = useState(null)
    let { id } = useParams();

    const fetchPokemon = async () => {
        try {
            axios.get(
                process.env.REACT_APP_LOCALAPI + "/pokemons"
            ).then((response) => {
                console.log(response.data)
                setData(response.data);

            });
        } catch (err) {
            console.log(err)
            throw err;
        }
    };
    const fetchTeam = async ()=>{
        try {
            axios.get(
                process.env.REACT_APP_LOCALAPI + "/teams/" + id
            ).then((response) => {
                console.log(response.data)
                setPokemons(response.data.pokemons);
                setTeam(response.data)
            });
        } catch (err) {
            console.log(err)
            throw err;
        }
    }
    useEffect(() => {
        fetchTeam();
        fetchPokemon();
    }, []);


    const constfilterData = (data, filter) => {

        return data.filter((pkmn) => pkmn.name.english.toLowerCase().includes(filter.toLowerCase()))
    }

    const updateTeam = () => {
        const team = {name: name, pokemons: pokemons };
        axios.put(process.env.REACT_APP_LOCALAPI + '/teams/'+id, team).then(navigate(-1))
    }

    const deleteTeam = () =>{
        axios.delete(process.env.REACT_APP_LOCALAPI + '/teams/'+id, team).then(navigate(-1))
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
        tempData[index] = { id: pkmn.id, name: pkmn.name.english }
        setPokemons(tempData);
    }

    return (
        <>
            {pokemons.length>0 &&
            <>
                <h2>{team.name}</h2> 
                <button onClick={deleteTeam}>DELETE</button>
                <div className='justify-content-center'>
                    <input onChange={handleChange}></input>
                    <button onClick={updateTeam}></button>
                    <ChoosePokemon props={{ pokemons: pokemons }} handleClick={handleClick} />
                </div>            
            </>

            }

            {pick &&
                <PokemonList props={{ pokemons: constfilterData(data, filter) }} handleClick={handleClickList} />
            }
        </>


    );
};

export default UpdateTeam;