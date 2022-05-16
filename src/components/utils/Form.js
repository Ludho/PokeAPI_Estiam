import React from 'react';

const Form = ({handleChange, value}) =>  {

    
    return <>
        <input 
            className='search'
            type='search' 
            placeholder={value} 
            onChange={handleChange}
        />
    </>

} 
export default Form;