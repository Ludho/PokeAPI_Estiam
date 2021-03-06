import React from 'react';

const UpdatePokemonCard = ({ props }) => {


    return <>
            
            <img
                alt={props.pokemon.name}
                src={process.env.REACT_APP_LOCALAPI + `/Asset/${(props.pokemon.id).toString().padStart(3, "0")}.png`}
                className="img-fluid rounded"
                style={{ padding: "10px"}}
            />
            <p className="text-center h5 m-0 bg-white">{props.pokemon.name}</p>


    </>

}
export default UpdatePokemonCard;