import React from 'react';
import ChooseType from "../utils/ChooseType"
import "./PokemonInfo.css"
import Button from "react-bootstrap/Button"
import Slider from '@mui/material/Slider';

const PokemonFormInfo = ({ props,req , handleChange, handleSave, handleDelete, }) => {

    const handleChangeChild = (e, type, to) => {
    
    let newState = props.type;

        switch(e){
            case "add":
                newState.push(type);
            break;
            case "delete":

                newState.splice(to, 1);

            break;
            case "update":
                newState[to]=type;
            break;
        }

        props.type=newState;

        handleChange(
            {
                target: {
                    name: "type"
                },
                value:newState
            }
            )


    }

    return <>
        <div className="col-md-6 my-auto info" style={{ padding: "100px", height: "75vh" }}>
            <section className='infos'>
                <div className='row'>
                    <div className="col-4 titre">Name</div>
                    <input className="col-6 value" name="name" style={{ marginLeft: "5px" }}  onChange={handleChange}></input>
                </div>
                <div className='row'>
                    <div className="col-4 titre">Type</div>
                    <div className='col-8 row'>
                        <ChooseType type={props.type} handleChange={handleChangeChild} />
                    </div>
                </div>
            </section>
            <hr></hr>
            <section className='stats'>
                <div className='row'>
                    <div className="col-4 titre">Attack</div>
                    <div className="col-1 value">{props.base.Attack}</div>
                    <div className="col-5 hover"><Slider key="atk" min={1} max={200} defaultValue={props.base.Attack} name="atk" onChange={handleChange}></Slider></div>

                </div>
                <div className='row'>
                    <div className="col-4 titre">Defense</div>
                    <div className="col-1 value">{props.base.Defense}</div>
                    <div className="col-5 hover"><Slider key="atk" min={1} max={200} defaultValue={props.base.Defense} name="def" onChange={handleChange}></Slider></div>

                </div>
                <div className='row'>
                    <div className="col-4 titre">HP</div>
                    <div className="col-1 value">{props.base.HP}</div>
                    <div className="col-5 hover"><Slider key="atk" min={1} max={200} defaultValue={props.base.HP} name="hp" onChange={handleChange}></Slider></div>

                </div>
                <div className='row'>
                    <div className="col-4 titre">Sp. Attack</div>
                    <div className="col-1 value">{props.base["Sp. Attack"]}</div>
                    <div className="col-5 hover"><Slider key="atk" min={1} max={200} defaultValue={props.base["Sp. Attack"]} name="spAtk" onChange={handleChange}></Slider></div>

                </div>
                <div className='row'>
                    <div className="col-4 titre">Sp. Defense</div>
                    <div className="col-1 value">{props.base["Sp. Defense"]}</div>
                    <div className="col-5 hover"><Slider key="atk" min={1} max={200} defaultValue={props.base["Sp. Defense"]} name="spDef" onChange={handleChange}></Slider></div>

                </div>
                <div className='row'>
                    <div className="col-4 titre">Speed</div>
                    <div className="col-1 value">{props.base.Speed}</div>
                    <div className="col-5 hover"><Slider key="atk" min={1} max={200} defaultValue={props.base.Speed} name="spd" onChange={handleChange}></Slider></div>

                </div>
            </section>
            <div className='text-center' style={{ padding: "10px" }}>
                <Button style={{ margin: "5px" }} onClick={handleSave}>SAVE</Button>
                <Button style={{ margin: "5px" ,display:req==="create"?"none":"inline"}} variant="danger" onClick={handleDelete}>DELETE</Button>
            </div>

        </div>
    </>
}
export default PokemonFormInfo;