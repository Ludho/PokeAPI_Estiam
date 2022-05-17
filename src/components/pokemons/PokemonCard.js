import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {getBackgroundColor} from "../../utils/function"

const PokemonCard = ({props, handleClick}) =>  {

    
    return <>
    <div className='col-md-2 col-sm-3 col-6' onClick={() => handleClick(props.pokemon)}>

        <div className="text-center shadow pokemon-card" style={{borderRadius:"0 0 10px 10px "}}>
            

            <LazyLoadImage
                alt={props.pokemon.name.english}
                src={process.env.REACT_APP_LOCALAPI+`/Asset/${(props.pokemon.id).toString().padStart(3, "0")}.png`}
                className="img-fluid"
                style={{padding:"20px",borderRadius:"10px 10px 0 0", backgroundColor:getBackgroundColor(props.pokemon.type[0])}}
            />
                <p style={{padding:"10px",borderRadius:"0 0 10px 10px "}} className="text-center h5 bg-white">{props.pokemon.name.english}</p>

            
        </div>

    </div>
    </>

} 
export default PokemonCard;