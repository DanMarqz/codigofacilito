//cuando pasamos una funcion sincrona a asincrona lo que se hace es tomar el valor que se está retornando y retornarlo en una promesa ya resuelta, sólo que esto lo hace de manera implicita
//asyn hace las modificaciones para que una funcion sincrona retorne una promesa sin imporotar si dentro del cuerpo de la funcion estamos retornando una promesa o no
async function suma(valor1,valor2){
    //return Promise.resolve(valor1 + valor2) <= esto es lo que hace async internamente y no es necesario colocarlo
    return valor1 + valor2;
  
  /*async function suma(valor1,valor2){
    return valor1 + valor2;*/
  }
  
  //las funciones asincronas pueden utilizar await, las no asincronas no.
  
  async function calcular(){
    return new Promise((resolve,reject)=>{
      setTimeout(resolve,400,5)
    });
}