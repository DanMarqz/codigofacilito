// //para declarar una función generadora hay que colocar "*" (asterisco) luego de la palabra function
// /*function* counter(){
//   console.log('Estoy acá');
//   yield 1;
//   console.log('Ahora estoy acá');
//   yield 2;
// }

// let generator = counter();

// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());*/

// //Otra forma de hacer con for

// function* counter(){
//     for(var i=1;i<=5;i++){
//       yield i;
//     }
//   }
  
//   let generator = counter();
  
//   console.log(generator.next());
//   console.log(generator.next());
//   console.log(generator.next());
//   console.log(generator.next());
//   console.log(generator.next());
//   console.log(generator.next());


//////////////return en function*
//para declarar una función generadora hay que colocar "*" (asterisco) luego de la palabra function
/*function* counter(){
  console.log('Estoy acá');
  yield 1;
  console.log('Ahora estoy acá');
  yield 2;
}

let generator = counter();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());*/

//Otra forma de hacer con for

function* counter(){
  for(var i=1;i<=5;i++){
    yield i;
  }
}

let generator = counter();


function* retornador(){
  return 3; //return es como llamar yield y adicional terminar el generador todo lo que aparezca después del return no aparecerá porque el generador habrá terminado
  yield 5;
}

let g = retornador();
console.log(g.next());
console.log(g.next());