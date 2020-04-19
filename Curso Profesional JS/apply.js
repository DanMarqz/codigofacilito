let numeros = [2,3,5]; //establece un array

function sumar(n1,n2,n3){ //función de sumar con argumentos
  return n1+n2+n3; //retorna la suma de los argumentos
}

let resultado = sumar.apply(this,numeros); //function.apply(this.array)
//let resultado = sumar(...numeros); cambia los valores del array [2,3,5] => 2,3,5 "..."=> Operador de propagación

console.log(resultado);