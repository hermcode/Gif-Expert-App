import React, { useEffect, useState } from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( {category} ) => {

  const [images, setImages] = useState([]);

  // useEffect
  useEffect( () => {
    getGifs();
  }, [])

  // Petición a la API Giphy
  const getGifs = async() => {

    const apiKey = 'wryjtazKZ7YGqtjhFXJkVj1waY1OcmgM';
    const search = 'Lewis Hamilton';
    const limit = 10;
  
    const url = `https://api.giphy.com/v1/gifs/search?q=${search}&limit=${limit}&api_key=${apiKey}`;
    const resp = await fetch ( url );
    const {data} = await resp.json();
    
    // Elimina toda la información irrelevante de data
    const gifs = data.map( img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
      }
    });

    console.log(gifs)
    setImages( gifs );
    
  }

  return (
    <>
      <h3>{ category }</h3>
      <ol>
        {
          images.map( item =>
            <GifGridItem  
              key = { item.id } 
              title = { item.title }
              url = { item.url }
            />
          )
        }
      </ol>
    </>
  )
}
