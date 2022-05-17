import React from 'react';
import PokemonCard from './PokemonCard';

const PokemonList = ({ props, handleClick }) =>  {
    const PokemonJSX = [];
    
    const handleClickChild=(pkmn)=>{
        handleClick(pkmn)
    }

    props.pokemons.forEach(pokemon => {
        PokemonJSX.push(
            <PokemonCard key={pokemon.id} props={{pokemon:pokemon}} handleClick={handleClickChild}/>
          );
    });
    
    return <>
        <div className="row">
            {PokemonJSX}
        </div>
    </>

} 
export default PokemonList;