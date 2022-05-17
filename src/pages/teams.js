import React from 'react';
import {useState, useEffect} from 'react';
import TeamsList from "../components/teams/teamList";
import PacmanLoader from "react-spinners/PacmanLoader";
import { NavLink  } from "react-router-dom";
import axios from 'axios';

const Teams = () => {
    const [isLoading, setLoading] = useState(true);
    const [hasError, setError] = useState(false);
    const [data, setData] = useState([]);

    const fetchApi = async () => {
      try {
        axios.get(
          process.env.REACT_APP_LOCALAPI+"/teams"
        ).then((response)=>{
            setData(response.data);
            setLoading(false);
      
          })
      } catch (err) {
        setError(true);
        throw err;
      }
    };
  
    useEffect(() => {
        fetchApi();
      }, []);


  
    if (hasError) return <p>Une erreur est survenue...</p>;
  
    return (
      <>
        <h1>Pokemon Teams</h1>
        <NavLink to={"create"}>+</NavLink>
        <div className="teams-container" style={{maxWidth:"70%", margin:"auto"}}>
          {isLoading ? (
            <PacmanLoader />
          ) : (
            <TeamsList props={{teams:data}} />
          )}
        </div>
      </>
    );
};
  
export default Teams;