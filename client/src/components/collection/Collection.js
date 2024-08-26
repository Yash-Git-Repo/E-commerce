import React from 'react'
import './Collection.scss'
import { useNavigate } from 'react-router-dom'

function Collection(category) {
  const navigate = useNavigate()
  
  return (
    <div className='Collection' style={{backgroundImage:`url(${category.category.attributes.image.data.attributes.url})`}} onClick={() =>{navigate(`/category/${category?.category?.attributes?.key}`)}}>
      <div className="content center">
        <h4 className='heading'>{category.category.attributes.title}</h4>
      </div>
    </div>
  )
}

export default Collection