import React, { Children } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ( props ) => {



  const {producto} = props

  const {id, image, title, description, category, rating, price} = producto


  return (
    <div className='prod-card'>
      <h3>{title}</h3>
      <img src={image} alt={`foto del producto ${title}`} height={200} width={200}/>
      <p>{description}</p>
      <p>price</p>
      <p>{props.children}</p>
      <Link to={`/detalle/${id}`} className="btn">Ver detalles</Link>
    </div>
    
  )
}

export default Item