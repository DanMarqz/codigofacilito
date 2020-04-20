
//Otra forma de crear una promesa
function dummy(){
  if(Math.floor(Date.now() / 1000)% 2 == 0)
    return Promise.resolve('Hola mundo');
  return Promise.reject('Error');
}

Promise.reject('Hola mundo').then(console.log).catch(console.log);
