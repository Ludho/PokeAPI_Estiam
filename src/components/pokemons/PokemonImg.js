import React from 'react';
import './PokemonImg.css'; 

const PokemonImg = ({props}) =>  {

    
    return <>
        <div className="col-md-6 text-center" style={{backgroundColor: getBackgroundColor(props.type[0]),borderRadius: "20px 0px 0px 20px", padding:"10px", position:"relative",height:"75vh"}}>
        <h1 className='text-white' style={{position:"absolute"}}><strong>#{(props.id).toString().padStart(3, "0")}</strong></h1>
        <h2 className='text-white text-center' style={{position:"absolute", top:"20%", width:"100%", fontSize:"4em","z-index": -1}}>{props.name.japanese}</h2>
        <img className="img-fluid" style={{position:"absolute", bottom:"0",left:"0",right:"0",margin:"auto",padding:"10px"}} alt={props.name.english} src={process.env.REACT_APP_LOCALAPI+`/Asset/${(props.id).toString().padStart(3, "0")}.png`} />
        </div>
    </>

} 

const getBackgroundColor = (type) =>{
    switch (type) {

        case "Fairy":
        
        return "#FFA9C3";
        
        case "Fire":
        
        return "#F08030";
        
        case "Normal":
        
        return "#A8A878";
        
        case "Poison":
        
        return "#A040A0";
        
        case "Flying":
        
        return "#A890F0";
        
        case "Grass":
        
        return "#55FF33";
        
        case "Bug":
        
        return "#A8B820";
        
        case "Ground":
        
        return "#E0C068";
        
        case "Water":
        
        return "#6890F0";
        
        case "Electric":
        
        return "#F8D030";
        
        case "Ice":
        
        return "#98D8D8";
        
        case "Fighting":
        
        return "#C03028";
        
        case "Psychic":
        
        return "#F85888";
        
        case "Rock":
        
        return "#B8A038";
        
        case "Ghost":
        
        return "#705898";
        
        case "Dragon":
        
        return "#7038F8";
        
        case "Dark":
        
        return "#705848";
        
        default:
        
        return "#A2A2A2";
        
        }
}
export default PokemonImg;