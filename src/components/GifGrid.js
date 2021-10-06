import React from 'react'
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs'
import { SpinnerLoader } from './SpinnerLoader';

export const GifGrid = ( {category} ) => {

  const limitValue = 50;
  const { data:images, dataLength, loading } = useFetchGifs(category, limitValue);

  const results = images.length;

  return (
    <div className='GifGrid'>
      <h2>{ category } { images && <span> {results} GIFs</span>} </h2>

      { loading && <SpinnerLoader />}
      
      { dataLength === 0 && <h1>No se encontraron resultados</h1> }

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
