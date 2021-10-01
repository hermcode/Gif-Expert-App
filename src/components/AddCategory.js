import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {

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
    </form>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
};