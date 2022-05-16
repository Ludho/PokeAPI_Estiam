import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { NavLink  } from "react-router-dom";


const PokemonCard = ({props, handleClick}) =>  {

    
    return <>
    <div className='col-md-2 col-sm-3 col-6' onClick={() => handleClick(props.pokemon)}>

        <div className="text-center">
            

            <LazyLoadImage
                alt={props.pokemon.name.english}
                src={process.env.REACT_APP_LOCALAPI+`/Asset/${(props.pokemon.id).toString().padStart(3, "0")}.png`}
                className="img-fluid"
                style={{padding:"10px"}}
            />
                <h2 className="text-center">{props.pokemon.name.english}</h2>

            
        </div>

    </div>
    </>

} 
export default PokemonCard;