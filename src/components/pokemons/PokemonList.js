import React from 'react';
import PokemonCard from './PokemonCard';

const PokemonList = ({ props }) =>  {
    const PokemonJSX = [];
    
    props.pokemons.forEach(pokemon => {
        PokemonJSX.push(
            <PokemonCard key={pokemon.id} props={{pokemon:pokemon}}/>
          );
    });
    
    return <>
        <div className="row">
            {PokemonJSX}
        </div>
    </>

} 
export default PokemonList;