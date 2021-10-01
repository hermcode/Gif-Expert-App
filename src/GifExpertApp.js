import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

  // const categories = ['Drive To Survive', 'El juego del calamar', 'Lucifer'];
  const drivers = ['Lewis Hamilton', 'Max Verstappen', 'Sergio Pérez', 'Valteri Bottas'];
  const [categories, setCategories] = useState(drivers);

  // const handleAdd = () => {
  //   // setCategories( cats => [...cats, 'Elite']);
  //   setCategories( [...categories, 'Stranger Things']);
  // }
  
  return(
    <>
      <h2>GifExpertApp</h2>

      {/* Input */}
      <AddCategory setCategories = { setCategories }/>

      <hr />

      <ol>
        {
          categories.map( category => {
            return <li key = { category }> { category } </li>
          })
        }
      </ol>
    </>
  );

}