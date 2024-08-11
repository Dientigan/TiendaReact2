import React, { useEffect, useState } from 'react'
import Boton from '../Boton'

const ItemCount = ({id}) => {
    const [ count, setCount] = useState(1)
    const [ productos , setProductos ] = useState(1)
    const [ ordenados, setOrdenados] = useState(true)

    // useEffect(() => {
    //   if(count === 5){
    //     console.log("llamo a mi base de datos para buscar las ofertas")
    //   }
    // }, [count])

    useEffect(()=>{
        if(ordenados){
          console.log("estan ordenados")

        }else{
          console.log("estan desordenados")
        }

    }, [] )
    
    console.log("el componente se renderiza")

    const sumar = () =>{
        if(count < 10)
        setCount(count + 1 )
    }
    const restar = () =>{
        if(count > 1 )
        setCount(count - 1 )
    }

    const comprar = () =>{
       console.log(`compraste ${count} unidades del producto ${id}`)
    }


  return (
    <div className='container'>
        <Boton texto="-" fn={restar} />
        <span>{count}</span>
        <Boton texto="+" fn={sumar}  />
        <Boton texto="Comprar" fn={comprar} />
    </div>
  )
}

export default ItemCount