import React from 'react'
import PropTypes from 'prop-types'

export const GifGridItem = ( {title, url} ) => {
  
    return (
    <div>
       <img className="gif-img animate__animated animate__bounce animate__fadeIn" src={url} alt={ title } />
       <p> {title} </p>
    </div>
  )
}

GifGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}


