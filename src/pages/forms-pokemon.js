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
    const [name, setName] = useState("???");
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
        if (props.req == "update" && isLoading) { fetchApi() };

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
            id: id?id:0
        })
        setLoading(false)

    }, [name, atk, def, spAtk, spDef, hp, spd, type]);



    const handleChange = (e) => {
        switch (e.target.name) {
            case "name":
                setName(e.target.value)
                break;
            case "displayName":
                setDisplayName(e.target.value)
                break;
            case "type":
                setType([...e.value])
                break;
            case "atk":

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


    }

    const handleSave = () => {
        if (props.req == "update") updatePokemon();
        if (props.req == "create") createPokemon();
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
            type: type
        };
        axios.put(process.env.REACT_APP_LOCALAPI + '/pokemons/' + id, pokemon).then(navigate({ pathname: "/pokemons" }))
    }

    const deletePokemon = () => {
        axios.delete(process.env.REACT_APP_LOCALAPI + '/pokemons/' + id).then(navigate("/pokemons"))
    }

    const createPokemon = () => {
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
            type: type
        };
        axios.post(process.env.REACT_APP_LOCALAPI + '/pokemons/', pokemon).then(navigate("/pokemons"))
    }

    if (hasError) return <p>Une erreur est survenue...</p>;

    return (
        <>
            {isLoading &&
                <PacmanLoader />
            }
            {data &&
                                <>
                                <GoBack props={props.req==="create"?"/pokemons":"/pokemons/"+id} />
                                <div className='container-fluid'>
                                    <div className='row shadow' style={{ postion: "relative", height: "75vh", borderRadius: "20px" }}>
                                        <PokemonImg props={data} />
                                        <PokemonFormInfo props={data} req={props.req} handleChange={handleChange} handleSave={handleSave} handleDelete={deletePokemon} />
                                    </div>
                                </div>
                            </>
            }


        </>
    );
};

export default FormPokemon;