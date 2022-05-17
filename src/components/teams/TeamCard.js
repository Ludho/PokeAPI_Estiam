import React from 'react';
import { NavLink } from "react-router-dom";


const TeamCard = ({ props }) => {


    return <>
        <div className='col-md-4 col-sm-6' style={{ padding: "5px" }}>
            <div style={{ backgroundColor: "white", padding: "10px"}} className="rounded shadow team-card">
                <h2 className="text-truncate" style={{display: 'block'}}>
                        {props.team.name}
                </h2>
                <NavLink to={`./update/${props.team.id}`}>
                    <div className='row'>
                        {
                            props.team.pokemons.map(pokemon => {
                                if (pokemon.id > 0) {
                                    return (<>
                                        <div className='col-md-6'>
                                            <img alt={pokemon.name} src={`${process.env.REACT_APP_LOCALAPI}/Asset/${pokemon.id.toString().padStart(3, "0")}.png`} style={{ padding: "5px" }} className="img-fluid"></img>
                                        </div>
                                    </>)
                                }
                                else {
                                    return (<>
                                        <div className='col-md-6'>
                                            <img alt="pokeball" src={process.env.REACT_APP_LOCALAPI + "/287221.png"} style={{ padding: "5px" }} className="img-fluid"></img>
                                        </div>
                                    </>)
                                }
                            })
                        }
                    </div>
                </NavLink>
            </div>
        </div>
    </>

}
export default TeamCard;