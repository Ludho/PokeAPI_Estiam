import React from 'react';

const Form = ({ handleChange }) => {


    return <>
        <div className='d-flex flex-row-reverse' style={{marginTop:"10px",marginBottom:"10px"}}>
            <input
                className='search form-control rounded'
                type='search'
                placeholder="search"
                onChange={handleChange}
            />
        </div>
    </>

}
export default Form;