import { useState } from 'react'
import './Boton.css'

//Un componente de react solamente puede retornar UN SOLO elemento jsx


const Boton = ({texto, fn}) => {

    


    return (
        <>
            <button className="green" onClick={ () => fn() } > {texto} </button>
        </>
    )
}

export default Boton