import React from 'react';


const GoBack = () => {


    return <>
        <div className="hover" style={{margin:"5px 0 5px 0"}}>
            <span className="goBack" onClick={()=>{window.history.back()}}>Go Back</span>
        </div>
    </>

}
export default GoBack;