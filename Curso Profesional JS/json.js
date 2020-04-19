//Declaración de objetos con JSON
//Definir un objeto
let curso = {
    titulo: 'Curso profesional de JavaScript',
    duracion: 2.2,
    formato: 'video',
    bloque: ['Introduccion','Funciones'],
    inscribir: function(usuario){
      console.log(usuario + " ahora está inscrito");
    }
} 
//Permite asignar propiedades y métodos json

//objeto = curso
//propiedad = titulo
//método = inscribir

//console.log(curso.titulo); // Lee el valor de una propiedad --> objeto.propiedad (opción 1)
//console.log(curso['titulo']); // Lee el valor de una propiedad --> objeto['propiedad'] (opción 2)
//Se pueden utilizar ambos ya que retorna lo mismo en ambos resultados: Curso profesional de JavaScript

//curso.inscribir('Daniel'); // Ejecuta el método

//Propiedades y metodos JSON pueden ser reasignados
//curso.titulo = 'Curso base JavaScript';//Reasigna la propiedad de titulo (opción 1)
//console.log(curso.titulo);  //Imprime titulo con la nueva propieda

curso['inscribir'] = function(){} //Reasigna el método a una función vacía (opción 2)
curso.inscribir("Daniel"); //Imprime le nuevo valor del método
//Se pueden aplicar ambos ya que realizan la misma acción(opción 1 y 2)

//funciones son ciudadanos de primera clase