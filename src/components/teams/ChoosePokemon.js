import React from 'react';
import UpdatePokemonCard from './UpdatePokemonCard';
import {BiXCircle} from "react-icons/bi";
import { getBackgroundColor } from '../../utils/function';

const ChoosePokemon = ({ props, handlePick, handleDelete}) => {
    const PokemonsJSX = [];
    for (let i = 0; i < 6; i++) {
        if (props.pokemons[i].id>0) {
            PokemonsJSX.push(
                <div className='col-lg-2 col-md-4 col-sm-6 text-center t-10'>
                    <div className='pokemon-card rounded shadow' style={{position:"relative", backgroundColor:getBackgroundColor(props.pokemons[i].type[0])}} onClick={() => handlePick(i)}>
                    <BiXCircle className="svg" style={{position:"absolute", top:5, right:5}}  onClick={(e)=>handleDelete(e,i)} />
                    <UpdatePokemonCard key={props.pokemons[i].id} props={{pokemon:props.pokemons[i]}}/>
                    </div>
                </div>
              );
        }else{
            PokemonsJSX.push(
                <div className='col-lg-2 col-md-4 col-sm-6 text-center pokemon-card rounded' onClick={() => handlePick(i)}>
                    <img 
                        alt="buttonSelectPokemon"
                        src={process.env.REACT_APP_LOCALAPI +"/Asset/AddButton.png"}
                        className="img-fluid"
                        style={{ padding: "10px"}}
                    />
                </div>
              );
        }
    }

    return <>
        <div className='row'>
            {PokemonsJSX}
        </div>
    </>

}
export default ChoosePokemon;