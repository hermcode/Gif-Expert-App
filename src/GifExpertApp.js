import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

  // const categories = ['Drive To Survive', 'El juego del calamar', 'Lucifer'];
  const drivers = ['Lewis Hamilton'];
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


      <ol>
        {
          categories.map( category => 
            <GifGrid 
              key = { category }
              category = { category }
            />
          )
        }
      </ol>
    </>
  );

}