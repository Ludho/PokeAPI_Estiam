import React from 'react';
import { NavLink } from "react-router-dom";


const TeamCard = ({ props }) => {


    return <>
        <div className='col-md-4' style={{ padding: "5px" }}>
            <div style={{ backgroundColor: "whitesmoke", padding: "10px", borderRadius:"10px" }}>
                <h2>{props.team.name}</h2>
                <NavLink to={`./update/${props.team.id}`}>
                    <div className='row'>
                        {
                            props.team.pokemons.map(pokemon => {
                                if (pokemon.id > 0) {
                                    return (<>
                                        <div className='col-md-6'>
                                            <img src={`${process.env.REACT_APP_LOCALAPI}/Asset/${pokemon.id.toString().padStart(3, "0")}.png`} style={{ padding: "5px" }} className="img-fluid"></img>
                                        </div>
                                    </>)
                                }
                                else {
                                    return (<>
                                        <div className='col-md-6'>
                                            <img src={process.env.REACT_APP_LOCALAPI + "/287221.png"} style={{ padding: "5px" }} className="img-fluid"></img>
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