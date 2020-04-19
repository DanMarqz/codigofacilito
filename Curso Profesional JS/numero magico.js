// Programar el juego del "numero Mágico" en el que se define un numero y el usuario trata de adivinarlo, si el numero que ingresó el usuario es menor, imprimir la pista "El numero mágico es mayor", si el numero que ingresó el usuario es mayor, imprimir la pista "El numero mágico es menor",
const ns = parseInt(Math.random() * (10 - 1) + 1);
console.log(ns);
while (true) {
  let nu = parseInt(prompt("Adivina el numero entre 1 y 10. (0 para finalizar)"));
  if (nu == 0) {
    break;
  }
  else if (nu == ns) {
    alert("Ganaste");
    break;
  }
  else if (nu < ns) {
    alert("El numero introducido es menor que el numero magico");
  }
  else if (nu > ns) {
    alert("El numero introducido es mayor que el numero magico");
  }
}
