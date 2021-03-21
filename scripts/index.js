'use strict';
// Nivel 1 Ejercicio 1

let currentJoke = document.querySelector('#content'); 
function generarChiste() {
    fetch('https://icanhazdadjoke.com/', { 

        headers: {
            'Accept': 'application/json'
        },
        method: 'GET', //Se usa get para obtener los datos
    })
    .then((response) => response.json())

        .then(data => {
            console.log(data);
            currentJoke.innerHTML = `${data.joke}`
        })

        .catch (function(err) { 
               console.error(err);
           });
}


