import React from 'react';
import TeamCard from './TeamCard';

const TeamsList = ({ props }) =>  {
    const TeamJSX = [];
    
    props.teams.forEach(team => {

        TeamJSX.push(
            <TeamCard key={team.id} props={{team:team}}/>
          );
    });
    
    return <>
        <div className="row">
            {TeamJSX}
        </div>
    </>

} 
export default TeamsList;