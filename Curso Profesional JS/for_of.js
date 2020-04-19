//NOTE Efor_of puede aplicarse sobre cualquier objeto iterable, cualquier objeto iterable puede ser algún tipo de objeto, una cadena, un array
//En cada iteración nos entrega el valor de un elemento del iterable

/*1-let arreglo = [2,3,4];
1- for(numero of arreglo){
    console.log(numero);
  }*/

function saludaATodos(){
    for(nombre of arguments){
      console.log('Hola '+ nombre) //resultado Hola + los argumentos de saludaATodos
    }
  }
  
  saludaATodos('Daniel','CodigoFacilito','Alumnos');