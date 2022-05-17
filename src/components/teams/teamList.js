import React from 'react';
import TeamCard from './TeamCard';
import { NavLink  } from "react-router-dom";

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
                <NavLink to={"create"}>
                    <div style={{ backgroundColor: "white", padding: "10px" }} className="rounded shadow team-card">
                        <img
                            alt="buttonSelectPokemon"
                            src={process.env.REACT_APP_LOCALAPI + "/Asset/AddButton.png"}
                            className="img-fluid"
                            style={{ padding: "10px" }}
                        />
                    </div>
                </NavLink>
            </div>
        </div>
    </>

}
export default TeamsList;