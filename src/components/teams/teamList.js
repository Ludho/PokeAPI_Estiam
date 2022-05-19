import React from 'react';
import TeamCard from './TeamCard';
import { NavLink } from "react-router-dom";

const TeamsList = ({ props }) => {
    const TeamJSX = [];

    props.teams.forEach(team => {

        TeamJSX.push(
            <>
                <TeamCard key={team.id} props={{ team: team }} />
            </>
        );
    });

    return <>
        <div className="row gx-3">
            {TeamJSX}

            <div className='col-md-4' style={{ padding: "5px" }}>

                <div style={{ padding: "10px" }} >
                    <NavLink to={"create"}>
                        <img
                            alt="buttonSelectPokemon"
                            src={process.env.REACT_APP_LOCALAPI + "/Asset/AddButton.png"}
                            className="img-fluid hover"
                            style={{ padding: "10px" }}
                        />
                    </NavLink>
                </div>
            </div>
        </div>
    </>

}
export default TeamsList;