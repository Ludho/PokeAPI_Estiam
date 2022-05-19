import React from 'react';
import {getBackgroundColor, getTextColor} from "../../utils/function"

const PokemonImg = ({ props }) => {


    return <>
        <div className="col-md-6 text-center" style={{ backgroundColor: getBackgroundColor(props.type[0]), borderRadius: "20px 0px 0px 20px", padding: "20px", position: "relative", height: "75vh" }}>
            <p className='text-white h5' style={{ position: "absolute" }}><strong>#{(props.id).toString().padStart(3, "0")}</strong></p>
            <p className='text-white h2' style={{ position: "absolute", top: "40px" }}><strong>{(props.name.english)}</strong></p>
            <h2 className='text-center' style={{ position: "absolute", top: "20%", width: "100%", fontSize: "4em", zIndex: 0, fontWeight: "bold", color:getTextColor(props.type[0])}}>{props.name.japanese}</h2>
            <img className="img-fluid" style={{ position: "absolute", maxHeight: "100%", bottom: "0", left: "0", right: "0", margin: "auto", padding: "20px" }} alt={props.name.english} src={process.env.REACT_APP_LOCALAPI + `/Asset/${(props.id).toString().padStart(3, "0")}.png`} />
        </div>
    </>

}

export default PokemonImg;