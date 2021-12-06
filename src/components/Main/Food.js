// 1. Importaciones
import React from 'react'

// 2. Exportación de función
export default function Food(props) {

    console.log(props)

    const list = props.list
    const restaurants = props.restaurants

    console.log(list)

    return (
        // <> Son fragmentos. Siempre van en un componente.
       <> 
            {
                list.map((e, index) => {
                    return (
                        <div key={index}>
                        <p>la comida es: </p>
                        <p>{e}</p>
                        </div>
                    )
                })
            }
            <hr />
            {
                restaurants.map((e, index) => {
                    return (
                        <div key={index}>
                            <p>El restaurante se llama: {e.nombre} y su platillo es {e.platilloPrincipal}</p>
                        </div>
                    )
                })
            }

       </>
    )
}