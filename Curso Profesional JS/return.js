// Parámetro: Se le asigna el parámetro a la función para llenar con un argumento (function cuadrado(numero)), en este caso el parámetro es numero.
// Argumento: Le asigna argumento al parámetro de la función (function cuadrado(2)), en este caso el argumento es 2 y le está dando el valor a numero.
// Valor por default: En el código numero = 0 está asignando un valor por default en caso de que no se reciba algún argumento.
// Las funciones que tengan más de 1 parámetro primero debe ir el que no posea algún valor por default.

/* Objeto arguments[x]: Se puede no definir un parametro a la función y retornar los valores de los argumentos. 
(Todos los argumentos que no coincidan con algún parametro está con el objeto arguments)
function sumarTodo(){
    return arguments [0] + arguments[1];
}
console.log(sumarTodo(1,2,3,4);
*/

function cuadrado(numero = 0){
    console.log(numero);
    return numero * numero;
}
console.log(cuadrado(2));