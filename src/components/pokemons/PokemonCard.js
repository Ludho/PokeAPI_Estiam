import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { NavLink  } from "react-router-dom";


const PokemonCard = ({props}) =>  {

    
    return <>
    <div className='col-md-2 col-sm-3 col-6'>
    <NavLink to={`${props.pokemon.id}`}>
        <div className="justify-content-center align-items-center">
            

            <LazyLoadImage
                alt={props.pokemon.name.english}
                src={process.env.REACT_APP_LOCALAPI+`/Asset/${(props.pokemon.id).toString().padStart(3, "0")}.png`}
                className="img-fluid"
                style={{padding:"10px"}}
            />
                <h2 className="text-center">{props.pokemon.name.english}</h2>

            
        </div>
    </NavLink>
    </div>
    </>

} 
export default PokemonCard;