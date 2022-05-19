import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import PokemonFormInfo from "../components/pokemons/PokemonFormInfo"
import PokemonImg from "../components/pokemons/PokemonImg"
import PacmanLoader from "react-spinners/PacmanLoader";
import GoBack from "../components/utils/GoBack"
import { useNavigate } from 'react-router-dom';

const FormPokemon = ({ props }) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [hasError, setError] = useState(false);
    const [name, setName] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [type, setType] = useState([]);
    const [atk, setAtk] = useState(10);
    const [def, setDef] = useState(10);
    const [hp, setHp] = useState(10);
    const [spAtk, setSpAtk] = useState(10);
    const [spDef, setSpDef] = useState(10);
    const [spd, setSpd] = useState(10);
    const navigate = useNavigate();
    
    let { id } = useParams();

    const fetchApi = async () => {
        try {

            axios.get(
                process.env.REACT_APP_LOCALAPI + "/pokemons/" + id
            ).then((response) => {
                setData(response.data);
                setAtk(response.data.base.Attack)
                setDef(response.data.base.Defense)
                setHp(response.data.base.HP)
                setSpAtk(response.data.base["Sp. Attack"])
                setSpDef(response.data.base["Sp. Defense"])
                setSpd(response.data.base.Speed)
                setType(response.data.type)
                setName(response.data.name.english)
                setDisplayName(response.data.name.japanese)
                setLoading(false);
            })
        } catch (err) {
            setError(true);
            throw err;
        }
    };

    useEffect(() => {
        if (props.req == "update" && isLoading) fetchApi();
    }, []);

    

    const handleChange = (e) => {
        switch (e.target.name) {
            case "name":
                setName(e.target.value)
                break;
            case "displayName":
                setDisplayName(e.target.value)
                break;
            case "type":
                console.log(e.value)
                setType(e.value)
                break;
            case "atk":
                console.log(e.target)
                setAtk(e.target.value)
                break;
            case "def":
                setDef(e.target.value)
                break;
            case "hp":
                setHp(e.target.value)
                break;
            case "spAtk":
                setSpAtk(e.target.value)
                break;
            case "spDef":
                setSpDef(e.target.value)
                break;
            case "spd":
                setSpd(e.target.value)
                break;
            default:
                break;
        }
        setData({
            name: {
                english: name,
                japanese: displayName
            },
            base: {
                HP: hp,
                Attack: atk,
                Defense: def,
                "Sp. Attack": spAtk,
                "Sp. Defense": spDef,
                Speed: spd,
            },
            type: type,
            id: data.id
        })
    }

    const handleSave = ()=>{
        if(props.req=="update") updatePokemon()
    }

    const updatePokemon = () => {
        const pokemon = { 
            name: {
                english: name,
                japanese: displayName
            },
            base: {
                HP: hp,
                Attack: atk,
                Defense: def,
                "Sp. Attack": spAtk,
                "Sp. Defense": spDef,
                Speed: spd,
            },
            type: type,
            id: data.id
         };
        axios.put(process.env.REACT_APP_LOCALAPI + '/pokemons/' + id, pokemon).then(navigate({pathname:"/pokemons/"+id}))
    }

    const deletePokemon = () => {
        axios.delete(process.env.REACT_APP_LOCALAPI + '/pokemons/' + id).then(window.history.back().back())
    }

    if (hasError) return <p>Une erreur est survenue...</p>;

    return (
        <>
            {isLoading ? (
                <PacmanLoader />
            ) : (
                <>
                    <GoBack />
                    <div className='container-fluid'>
                        <div className='row shadow' style={{ postion:"relative", height: "75vh", borderRadius: "20px" }}>
                            <PokemonImg props={data} />
                            <PokemonFormInfo props={data} handleChange={handleChange} handleSave={handleSave} handleDelete={deletePokemon}/>
                            
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default FormPokemon;