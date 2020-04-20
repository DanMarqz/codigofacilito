
//Una forma de realizar una promesa
let promise = new Promise(function(resolve,reject){
    setTimeout(function(){
      return resolve('Hola Mundo');
      reject(new Error('Hubo un error'));
    },2000);
});

promise.then(function(resultado){
  console.log(resultado);
}).catch(function(err){
  console.log(err)
})
