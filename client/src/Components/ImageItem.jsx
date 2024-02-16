import React from 'react'
import "./ImageItem.css"
const ImageItem = ({img}) => {
  return (
    <div className='image-box'>
          <img src={`http://localhost:3000/images/${img.image}`} alt="" />
    </div>
  )
}

export default ImageItem
