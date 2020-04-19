//También con JSON Se puede declarar una función constructora

function Curso(titulo){ //La convención para las funciones constructoras es que la primera letra del nombre la función sea siempre en mayúsculas
  this.titulo = titulo;
  
  this.inscribir = function(usuario){
    console.log(usuario + " se ha inscrito")
  }
}


let cursoJavaScript = new Curso("Curso Profesional de JavaScript"); // con new le otorgamos el valor al parámetro de la función
let cursoRuby = new Curso("Curso Profesional de Ruby");

console.log(cursoRuby.titulo);
console.log(cursoJavaScript.titulo);