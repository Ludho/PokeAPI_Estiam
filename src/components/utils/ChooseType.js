import React, { useState } from 'react';
import Type from './Type';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import {BiXCircle} from "react-icons/bi";

const ChooseType = ({type, handleChange}) => {

    const [visible,setVisible]=useState(true)

    const handleClick=(e,type)=>{
        handleChange("delete",type)
    }


    return <>
        {type.map((type,i) => {
            return <div className='col-6 value' style={{ padding: "2px", position: "relative" }}>
                <div className="choose" onClick={()=>{setVisible(false)}} style={{display:visible?"inline":"none"}}><Type  type={type} /></div>
                <BiXCircle className="svg" style={{position:"absolute", top:9, right:9, display:visible?"inline":"none"}} name="delete" onClick={(e)=>{handleClick(e,type)}} />
                <DropdownButton onClick={()=>{setVisible(true)}}show style={{ margin: "2px", borderRadius: "20px", border: "solid", display:visible?"none":"inline", borderWidth: "1px", color: "white", fontWeight: "bold" }}>
                    {["Fairy", "Fire", "Normal", "Poison", "Flying", "Grass", "Bug", "Ground", "Water", "Electric", "Ice", "Fighting", "Psychic", "Rock", "Ghost", "Dragon", "Dark"].map(typeItem => {
                        return <Dropdown.Item name="add" onClick={()=>{handleChange("update",typeItem,i)}}><Type type={typeItem} /></Dropdown.Item>
                    })}
                </DropdownButton>
            </div>
        })}
        {type.length < 2 && <>
            <div className="col-6 value" style={{ padding: "2px" }}>    
                <DropdownButton style={{ margin: "2px", borderRadius: "20px", border: "solid", borderWidth: "1px", color: "white", fontWeight: "bold" }}>
                    {["Fairy", "Fire", "Normal", "Poison", "Flying", "Grass", "Bug", "Ground", "Water", "Electric", "Ice", "Fighting", "Psychic", "Rock", "Ghost", "Dragon", "Dark"].map(typeItem => {
                        return <Dropdown.Item name="add" onClick={()=>{handleChange("add",typeItem)}}><Type type={typeItem} /></Dropdown.Item>
                    })}
                </DropdownButton>
            </div>

        </>
        }
    </>

}
export default ChooseType;