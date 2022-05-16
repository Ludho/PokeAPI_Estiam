import React from 'react';

const PokemonImg = ({props}) =>  {

    
    return <>

        <img alt={props.name.english} src={process.env.REACT_APP_LOCALAPI+`/Asset/${(props.id).toString().padStart(3, "0")}.png`} />

    </>

} 
export default PokemonImg;