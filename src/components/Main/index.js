// 1. Importaciones
import React from 'react'
import Food from './Food'
import Movies from './Movies'



// 2. Funciones

function Main () {

    const foodList = [
		"tamales",
		"tortas",
		"tacos"
	]

    const restaurantsList = [
        {
            nombre: "McDonalds",
            platilloPrincipal: "Hamburguesas"
        }, 
        {
            nombre: "Pizza Hut",
            platilloPrincipal: "Pizza"
        },
        {
            nombre: "La casa de Toño",
            platilloPrincipal: "Tacos de cochinita"
        }
    ]

    const moviesList = [
        {
            título: "Rocketman",
            protagonista: "Taron Egerton",
            canción: "Rocketman"
        },
        {
            título: "Moulin Rouge",
            protagonista: "Nicole Kidman",
            canción: "The show must go on"
        },
        {
            título: "Bohemian Rhapsody",
            protagonista: "Rami Malek",
            canción: "Bohemian Rhapsody"
        }
    ]

    return (
        <>

        <Movies list= {moviesList} />
        
        <hr/>

        <Food list= {foodList} restaurants={restaurantsList} />

        </>
    )
}

// 3. Exportación

export default Main