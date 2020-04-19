//En arrays
let numeros = [2,3,5];

let otro_arreglo = ['hola','mundo'];

 //"..." operador de propagación, incluye el array dentro del argumento 
console.log([...numeros,...otro_arreglo]); //Resultado: [2,3,5,"hola","mundo"]
//console.log([2,...otro_arreglo,3]); //Resultado: [2,"hola","mundo",3]


//Para objetos
let objeto = {
    clave: 3
  }
  
  let objetoDos = {
    otraClave: 4
  }
  
  console.log(objeto);
  console.log(objetoDos);
  
  let newObject = {
    ...objeto,
    ...objetoDos
  };
  
  console.log(newObject);