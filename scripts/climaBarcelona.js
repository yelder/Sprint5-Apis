// ********************* LEVEL 2 - EXERCICE 1 *******************************
'use strict'

// *************************** BARCELONA *******************************


const API = "https://www.el-tiempo.net/api/json/v2/provincias/08/municipios/08019"; 

let barcelonaLocation= document.createElement("t");

document.getElementById("clima").appendChild(barcelonaLocation); 

//Se hace la funcion Async
(async function getWeather() {
    let response = await fetch(API, {
        headers:{
            "Accept": "application/json",
        },
    });
    let data = await response.json();
    console.log(barcelonaLocation);
   
    fecha.textContent=`${data.fecha}`;
    ciudad.textContent = `${data.municipio.NOMBRE}`;
    temperatura.textContent = `${data.temperatura_actual}º`;
    description.textContent = `${data.stateSky.description}`;
    lluvia.textContent = `Rain  ${data.lluvia}%`;
    humedad.textContent = `Humidity ${data.humedad}%`;

})();