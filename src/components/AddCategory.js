import React, { useState } from 'react'
import PropTypes from 'prop-types'
import 'boxicons'

export const AddCategory = ( {setCategory} ) => {

  const [inputValue, setInputValue] = useState('')

  // Cambia el estado de nuestro input
  const  handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(inputValue.trim().length > 0){
      setCategory( inputValue );
      setInputValue('');
    }
  }

  return (
    <form onSubmit = { handleSubmit } className='search-input'>
      <input 
        type="text"
        value = { inputValue }
        placeholder = "Ingresa una categoría"
        onChange = { handleInputChange }
      />
      
      <button className="btn-search"><box-icon name='search' size='md' color='white' rotate='90'></box-icon></button>
    </form>
  )
}

AddCategory.propTypes = {
  setCategory: PropTypes.func.isRequired
};