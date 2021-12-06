// 1. Importaciones
import React from "react"

// 2. Función

function Header (props) {

    console.log(props)

    return (
        <p>Hola. Soy el header. Te doy la bienvenida {props.nombre} de {props.ciudad}</p>
    )

}

// 3. Exportación
export default Header