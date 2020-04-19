class Usuario{
  constructor(nombre){ this._name = nombre; }
  
  get name(){ //Los getter se utilizan para mostrar propiedades
    /*para obtener el valor de una variable ya declarada en algún lado del archivo donde declaras ese mismo get 
    Se utiliza para que no tengas que tener que obtener el valor de una variable directamente desde otro archivo
    Es como para proteger la variable de que no sea tocada a lo loco por todos lados*/
    return this._name.charAt(0).toUpperCase() + this._name.slice(1);
  }
  
  set name(nombre){ //Para modificar propiedades
    /*es lo mismo pero al revés En vez de obtener, le asignas un nuevo valor*/
    this._name = nombre;
  }
}

let user = new Usuario("marcos");
user.name="daniel";
console.log(user.name);