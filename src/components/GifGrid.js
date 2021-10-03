import React, { useEffect, useState } from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( {category} ) => {

  const [images, setImages] = useState([]);

  // useEffect
  useEffect( () => {
    getGifs();
  }, [])

  const limitValue = 150;

  // Petición a la API Giphy
  const getGifs = async(limitValue) => {

    const api = 'https://api.giphy.com/v1/gifs/search?'
    const apiKey = '&api_key=wryjtazKZ7YGqtjhFXJkVj1waY1OcmgM';
    const query = `q=${category}`;
    const limit = `&limit=${limitValue}`;
  
    const url = api + query + limit + apiKey;
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
    <div className='GifGrid'>
      <h2>{ category } <span>{ limitValue } GIFs</span></h2>
      <div className = "card-grid">
        {
          images.map( item =>
            <GifGridItem  
              key = { item.id } 
              title = { item.title }
              url = { item.url }
            />
          )
        }
      </div>
    </div>
  )
}
