import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

  // const categories = ['Drive To Survive', 'El juego del calamar', 'Lucifer'];
  const drivers = ['Lewis Hamilton'];
  const [categories, setCategories] = useState('trending-gifs');

  // const handleAdd = () => {
  //   // setCategories( cats => [...cats, 'Elite']);
  //   setCategories( [...categories, 'Stranger Things']);
  // }
  
  return(
    <div className='GifExpertApp container'>
      <a href="">
        <img 
          className='giphy-logo' 
          src="https://i.pinimg.com/originals/58/e3/83/58e3834fdfe26e6d1853eb14d89cbff1.gif" 
          alt="Giphy logo" 
        />
      </a>
      

      {/* Input */}
      <AddCategory setCategories = { setCategories }/>

      <GifGrid 
            key = { categories }
            category = { categories }
      />
 
        {/* {
          categories.map( category => 
            <GifGrid 
              key = { category }
              category = { category }
            />
          )
        } */}

    </div>
  );

}