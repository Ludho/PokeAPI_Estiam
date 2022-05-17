import React from 'react';

import UpdatePokemonCard from './UpdatePokemonCard';

const ChoosePokemon = ({ props,handleClick }) => {
    console.log("choose" + props)
    const PokemonsJSX = [];
    for (let i = 0; i < 6; i++) {
        if (props.pokemons[i].id>0) {
            PokemonsJSX.push(
                <div className='col-lg-2 col-md-4 col-sm-6 text-center' onClick={() => handleClick(i)}>
                    <UpdatePokemonCard key={props.pokemons[i].id} props={{pokemon:props.pokemons[i]}}/>
                </div>
              );
        }else{
            PokemonsJSX.push(
                <div className='col-lg-2 col-md-4 col-sm-6 text-center' onClick={() => handleClick(i)}>
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