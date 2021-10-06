import React from 'react'

export const GifGridItem = ({title, url}) => {
  return (
    <div className = "card animate__animated animate__fadeInUp animate__faster">
      <img src={url} alt={title} />
    </div>
  )
}
