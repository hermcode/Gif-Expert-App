import React, { useState } from 'react'
import PropTypes from 'prop-types'
import 'boxicons'

export const AddCategory = ( {setCategories} ) => {

  const [inputValue, setInputValue] = useState('')

  // Cambia el estado de nuestro input
  const  handleInputChane = (e) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(inputValue.trim().length > 0){
      setCategories( cats => [...cats, inputValue]);
      setInputValue('');
    }
  }

  return (
    <form onSubmit = { handleSubmit }>
      <input 
        type="text"
        value = { inputValue }
        placeholder = "Ingresa una categoría"
        onChange = { handleInputChane }
      />
      
      <button><box-icon name='search'></box-icon></button>
    </form>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
};