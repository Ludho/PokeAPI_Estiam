import React from 'react';

const UpdatePokemonCard = ({ props }) => {


    return <>

            <img
                alt={props.pokemon.name}
                src={process.env.REACT_APP_LOCALAPI + `/Asset/${(props.pokemon.id).toString().padStart(3, "0")}.png`}
                className="img-fluid"
                style={{ padding: "10px" }}
            />
            <h2 className="text-center">{props.pokemon.name}</h2>


    </>

}
export default UpdatePokemonCard;