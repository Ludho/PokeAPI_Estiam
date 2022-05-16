import React from 'react';


const TeamCard = ({ props }) => {


    return <>
        <h2>{props.team.name}</h2>
        <div className='col-md-6'>
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