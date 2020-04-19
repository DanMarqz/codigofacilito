//Asíncrona
//Callback
// const request = require('request'); // crea el call back
// request('http://google.com',function(){ //al cumplir el request
//     console.log('Termine la petición de Google'); //envía comentario
// });
// console.log('Yo voy después en el código, después de la petición a Google'); //para demostrar que a pesar de que se sigue ejecutando la línea anterior no deja de leer código


//Promise
//NOTE Las promesas son un tipo de objeto en JS, el objeto de la promesa tiene principalmente un un method: then
//Sobre la ejecución de rp se está llamando un método then, el resultado de la ejecución rp es un objeto del tipo Promise

// Las promesas pueden estar en estado:
// fullfiled - Completado (Se cumplió con exito)
// rejected - No se cumplió con éxito
// pending - Pendiente (Estado de la promesa cuando no se ha culminado - no se ha cumplido)
// setled - Finalizada (Con éxito o algún error)

const rp = require('request-promise'); 

rp('http://google.com') //en este caso particular caso no se envía una segunda función como argumento (diferencia al callback sin promesa) 
    .then(function(html){ //NOTE Then: se le envía una función la cuál se ejecutará (then) si la promesa se cumplió sin errores 
        console.log('Termine la petición de Google');
    }).catch(function(err){ //NOTE Catch: en caso de que falle la promesa ejecutará la función de Catch
        console.log(err);
    })