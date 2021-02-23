import React, { useState } from 'react';
import propTypes from 'prop-types';

export const AddCategory = ({setCategorias}) => {

    const [value, setValue] = useState('') 
    
    const handleOnChange = (e) => {
        setValue(e.target.value)
    };
    
    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (value.trim().length > 2) {
        setCategorias(c => [value, ...c]);
        setValue('')
        }
    };
    
    return (
        <form onSubmit={handleOnSubmit}>
            <input 
               type = 'Text'
               //placeholder = {value}
               value = {value}
               onChange = {handleOnChange}
            >
            </input>
        </form>
    )
}

AddCategory.propTypes = {
    setCategorias: propTypes.func.isRequired
}