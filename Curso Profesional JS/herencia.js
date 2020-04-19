class User{ //establece la clase padre user
    constructor(nombre){
        this.nombre = nombre;
    }
    saludar(){
        console.log("Hola "+ this.nombre);
    }
}

class Admin extends User{ //establece la clase hija admin
    saludar(){
      super.saludar(); //super es usada para acceder y llamar funciones del padre de un objeto. En este caso llama la función de saludar
      console.log("Aquí se encuentra en el panel de Administración")
    }
}
 
let admin = new Admin("Daniel");
    admin.saludar(); //Imprime "Hola Usuario" + "Aquí se encuentra en el panel de Administración"

/*let user = new User();
    user.saludar(); // Imprime "Hola usuario"*/