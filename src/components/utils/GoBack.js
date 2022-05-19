import React from 'react';
import { useNavigate } from 'react-router-dom';

const GoBack = ({props}) => {
    const navigate = useNavigate();
    return <>
        <div className="hover" style={{margin:"5px 0 5px 0"}}>
            <span className="goBack" onClick={()=>{navigate(props)}}>Go Back</span>
        </div>
    </>

}
export default GoBack;