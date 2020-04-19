let p1 = new Promise((resolve,reject)=> setTimeout(resolve,500,'hola mundo') );
let p2 = new Promise((resolve,reject)=> setTimeout(resolve,600,'segundo hola mundo') );
let p3 = Promise.reject();

let saluda = ()=> console.log('Hola a todos');

// p1.then(function(){
//     p2.then(function(){
//         salauda();
//     })
// })

//promise.all falla si una de todas las promesas falla. a pesar de que las demás no fallen

Promise.all([p1,p2,p3]).then(resultados=>{ //se hace un arreglo con promise.all para todas las promesas que se quieren realizar recibe como argumento un iterable, ya sea arreglo o una cadena
    //aunque normalmente se envía un arreglo el metodo genera una nueva promesa que se resuelva hasta que todas las promesas del arreglo han sido resueltas
    //o falla en caso de que al menos de una de todas las promesas falle
    console.log(resultados);
    saluda();
}).catch(()=> console.log('I failed you. :('));