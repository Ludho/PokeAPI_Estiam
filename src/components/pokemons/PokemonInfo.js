import React from 'react';
import Type from "../utils/Type"

const PokemonInfo = ({ props }) => {


    return <>

        <section className='infos'>
            <div className='row'>
                <div className="col-6 titre">Id</div>
                <div className="col-6 value">#{(props.id).toString().padStart(3, "0")}</div>
                <div className="col-6 titre">Nom</div>
                <div className="col-6 value">{props.name.english}</div>

                <div className="col-6 titre">Type</div>
                <div className="col-6 value">{props.type.map((type) => {
                    return <Type type={type} />
                })}</div>
            </div>
        </section>
        <section className='stats'>
        <div className='row'>
                <div className="col-6 titre">Attack</div>
                <div className="col-6 value">{props.base.Attack}</div>
                <div className="col-6 titre">Defense</div>
                <div className="col-6 value">{props.base.Defense}</div>
                <div className="col-6 titre">HP</div>
                <div className="col-6 value">{props.base.HP}</div>
                <div className="col-6 titre">Sp. Attack</div>
                <div className="col-6 value">{props.base["Sp. Attack"]}</div>
                <div className="col-6 titre">Sp. Defense</div>
                <div className="col-6 value">{props.base["Sp. Defense"]}</div>
                <div className="col-6 titre">Speed</div>
                <div className="col-6 value">{props.base.Speed}</div>

            </div>
        </section>
    </>
}
export default PokemonInfo;