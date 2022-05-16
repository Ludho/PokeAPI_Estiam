import React from 'react';
import PokemonBigCard from './PokemonBigCard';

const PokemonList = ({ props }) =>  {
    const PokemonJSX = [];
    
    props.pokemons.forEach(pokemon => {
        PokemonJSX.push(
            <PokemonBigCard key={pokemon.id} props={{pokemon:pokemon}}/>
          );
    });
    
    return <>
        <div className="row">
            {PokemonJSX}
        </div>
    </>

} 
export default PokemonList;