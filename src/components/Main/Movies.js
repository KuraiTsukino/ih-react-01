// 1. Importaciones
import React from 'react'

// 2. Exportación de función
export default function Movies(props) {

    const list = props.list

    return (
        <>
      {
          list.map((e, index) => {
              return (
                  <article key={index}>
                  <p>La película se llama: {e.título}, el protagonista es: {e.protagonista} y su canción es: {e.canción}.</p>
                  </article>
              )
          })
      }
      </>
    )
}
