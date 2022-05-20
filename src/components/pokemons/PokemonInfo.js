import React from 'react';
import Type from "../utils/Type"
import "./PokemonInfo.css"
import ProgressBar from 'react-bootstrap/ProgressBar'
import { NavLink } from "react-router-dom";
import {MdCreate} from "react-icons/md"

const PokemonInfo = ({ props, handleChange }) => {

    return <>
        <div className="col-md-6 my-auto info" style={{padding:"100px",height:"75vh"}}>
            <NavLink className="d-flex flex-row-reverse" to={{pathname:"/pokemons/update/"+props.id, props:{req:"update"}}}>
                <MdCreate color="red" className="svg" size={32}/>
            </NavLink>
            <section className='infos'>
                <div className='row'>
                    <div className="col-4 titre">Name</div>
                    <div className="col-6 value" style={{marginLeft:"5px"}}>{props.name.english}</div>
                </div>
                <div className='row'>
                    <div className="col-4 titre">Type</div>
                    <div className='col-8 row'>
                        {props.type.map((type) => {
                            return <div key={type} className='col-6 value' style={{padding:"2px"}}><Type type={type}/></div>
                        })}
                    </div>
                </div>
            </section>
            <hr></hr>
            <section className='stats'>
                <div className='row'>
                    <div className="col-4 titre">Attack</div>
                    <div className="col-1 value">{props.base.Attack}</div>
                    <div className="col-5 hover"><ProgressBar now={props.base.Attack/2} /></div>
                    
                </div>
                <div className='row'>  
                    <div className="col-4 titre">Defense</div>
                    <div className="col-1 value">{props.base.Defense}</div>
                    <div className="col-5 hover"><ProgressBar now={props.base.Defense/2} /></div>
                    
                </div>
                <div className='row'>
                    <div className="col-4 titre">HP</div>
                    <div className="col-1 value">{props.base.HP}</div>
                    <div className="col-5 hover"><ProgressBar now={props.base.HP/2} /></div>
                    
                </div>
                <div className='row'>
                    <div className="col-4 titre">Sp. Attack</div>
                    <div className="col-1 value">{props.base["Sp. Attack"]}</div>
                    <div className="col-5 hover"><ProgressBar now={props.base["Sp. Attack"]/2} /></div>
                    
                </div>
                <div className='row'>
                    <div className="col-4 titre">Sp. Defense</div>
                    <div className="col-1 value">{props.base["Sp. Defense"]}</div>
                    <div className="col-5 hover"><ProgressBar now={props.base["Sp. Defense"]/2} /></div>
                    
                </div>
                <div className='row'>
                    <div className="col-4 titre">Speed</div>
                    <div className="col-1 value">{props.base.Speed}</div>
                    <div className="col-5 hover"><ProgressBar now={props.base.Speed/2} /></div>
                    
                </div>
            </section>
        </div>
    </>
}
export default PokemonInfo;