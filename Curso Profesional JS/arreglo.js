let arreglo = ["python", "java", "ruby", "go"];

//Eliminar Ruby
/*arreglo = arreglo.filter(function(el){
  return el != "ruby";
})*/

//Eliminar ruby con flecha
arreglo = arreglo.filter((el) => el != "ruby");

arreglo.forEach(function(elemento){
  console.log(elemento);
})