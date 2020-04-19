const request = require('request');
function leer(url){
   return new Promise(function(yes,not){ //las prácticas correctas son: resolve y reject
        //La operación asíncrona debe ejecutarse dentro del executor   
        request(url,function(err,response){ //request usa callback, se envía una función para saber cuando la operación terminó; recibe 2 argumentos, una de error en de que algo haya salido mal y una respuesta en caso de que haya podido leer la página de manera exitosa
            if(err){
                not(err);
            }else{
                yes(response);
            }
        });
   });
}

leer('https://danmarqz.github.io/workstosharewithmywiggas/') //como este metodo asincrono retorna una promesa
    .then(function(response){ //then: si la promesa se cumple
        console.log(response);
    })
    .catch(function(err){ //catch: si la promesa no se cumple
        console.log(err);
    });

/*function asincrono(){ //constructor
    return new Promise(function(resolve,reject){//el executor recibe 2 argumentos, una función (resolve) y una (reject) tienen la habilidad de resolver o rechazar una promesa
        resolve('Todo salió bien'); //resolve: se debe mandar a llamar cuando la operación asincrona terminó y fue exitosa, además, recibe como argumento el resultado que queremos enviar de la petición asincrona. Marca la promesa como Fullfiled o completada
        
        reject(new Error('No se pudo completar')); //rejected: marca la promesa como rejected o rechazada, debe mandarse a llamar cuando hubo un error en la operación asincrona y queremos hacer saber que la promesa no pudo completarse
        //Para crear una promesa se le debe pasar al constructor una función al que llamamos executor(function)
    }); //Constructor promise nos permite generar promesas nuvas además después de colocarlo de la palabra return indicamos que este method está retornando la promesa
}*/