'use strict';
// Nivel 1 Ejercicio 1

/*let currentJoke = document.querySelector('#content'); 
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
*/

//Nivel 3
const url = ["http://api.icndb.com/jokes/random", "https://icanhazdadjoke.com"]; // Array diferents APIS

const generarChiste = async () => {
    let random = Math.floor(Math.random() * url.length); //Para usar cualquiera de las 2 url
    let actualUrl = url[random]; 

    let response = await fetch(actualUrl, {
        headers: {
            'Accept': 'application/json'
        }
    });
    let data = await response.json();
    const joke = [data.value, data.joke]; 
    p.innerText = joke[random];
}
let p = document.createElement("p");
document.getElementById("joke").appendChild(p); 
    
// Cuando se da click al boton se llama a la función
document.getElementById("botonChiste").addEventListener("click", () => {
    generarChiste();
});
