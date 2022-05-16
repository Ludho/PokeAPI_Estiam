import React from 'react';

import { ReactComponent as AddButtonSVG } from '../../asset/AddButton.svg';
import UpdatePokemonCard from './UpdatePokemonCard';

const ChoosePokemon = ({ props }) => {

    const PokemonsJSX = [];
    
    for (let i = 0; i < 6; i++) {
        if (props.pokemons[i]) {
            PokemonsJSX.push(
                <div className='col-md-6'>
                    <UpdatePokemonCard key={props.pokemons[i].id} props={{pokemon:props.pokemons[i]}}/>
                </div>
              );
        }else{
            PokemonsJSX.push(
                <div className='col-md-6'>
                    <AddButtonSVG/>
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