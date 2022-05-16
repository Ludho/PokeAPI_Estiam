import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { NavLink } from "react-router-dom";


const TeamCard = ({ props }) => {


    return <>
        <h2>{props.team.name}</h2>
        <div className='col-mg-6'>
            {
                props.team.pokemons.map(pokemon => {
                    return (<>
                        <div>
                            {pokemon.name}
                        </div>
                    </>)
                })
            }
        </div>
    </>

}
export default TeamCard;