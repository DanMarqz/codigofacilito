//NOTE   For_in itera las propiedades de cualquier tipo de objeto, mismos que no necesitan ser iterables como en el caso del for_of
//solo muestra las propiedades iterables
let usuario ={
    nombre: 'Daniel',
    edad: 22
  }
  
  for(propiedad in usuario){
    console.log(propiedad); //Resultado: nombre, edad
  }