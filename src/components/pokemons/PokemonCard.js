import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { NavLink  } from "react-router-dom";


const PokemonCard = ({props}) =>  {

    
    return <>
    <div className="d-flex justify-content-center col-md-2 col-sm-3">
        <NavLink to={`${props.pokemon.id}`}>

        <LazyLoadImage
            alt={props.pokemon.name.english}
            src={process.env.REACT_APP_LOCALAPI+`/Asset/${(props.pokemon.id).toString().padStart(3, "0")}.png`}
            width={90} 
            height={90} 
        />
            <h2>{props.pokemon.name.english}</h2>

        </NavLink>
    </div>
    </>

} 
export default PokemonCard;