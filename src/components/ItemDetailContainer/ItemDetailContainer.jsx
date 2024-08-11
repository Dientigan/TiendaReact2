import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail"
import { useNavigate, useParams } from "react-router-dom"
import { getProducto } from "../../asyncMock"




export const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const [error, setError] = useState(null)
    const [cargando, setCargando] = useState(true)
    const { id } = useParams()
    const navigate = useNavigate();

    const mostrarSiguiente = () =>{
        let ruta = id*1 + 1
        navigate(`/detalle/${ruta}`)
    }
    const mostrarAnterior = () =>{
        if(id > 0){
            let ruta = id*1 - 1
            navigate(`/detalle/${ruta}`)
        }
    }


    useEffect(() => {
        setCargando(true)
        const fetchProducto = async () => {
            try{

                // const res = await fetch(`https://fakestoreapi.com/products/${id}`)
                // const data = await res.json()
                const res = await getProducto(id)
                setProducto(res)

            } catch (error){
                setError(error)
            } finally {
                setCargando(false)
            }
        }

        fetchProducto()



        // fetch('https://fakestoreapi.com/products/1')
        // .then(res=>res.json())
        // .then(json=>console.log(json))

    }, [ id])

    console.log(producto)
    

  return (
    <>
    {
        cargando ? 
        <h3>cargando....</h3>
        :
        <ItemDetail producto={producto} mostrarSiguiente={mostrarSiguiente} mostrarAnterior={mostrarAnterior}/>
    }
    </>
  )
}