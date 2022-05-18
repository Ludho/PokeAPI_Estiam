import React from 'react';
import {useState, useEffect} from 'react';
import TeamsList from "../components/teams/teamList";
import RiseLoader from "react-spinners/RiseLoader";
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
        <h1 className='text-center '><u>Pokemon Teams</u></h1>
        <div className="teams-container" style={{maxWidth:"70%", margin:"auto"}}>
          {isLoading ? (
            <div className='d-flex align-items-center justify-content-center' style={{height:"50vh"}}>
              <RiseLoader color="red" size={50}/>
            </div>
          ) : (
            <TeamsList props={{teams:data}} />
          )}
        </div>
      </>
    );
};
  
export default Teams;