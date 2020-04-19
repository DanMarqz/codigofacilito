class Usuario{
  
    constuctor(permisos="lectura"){ this.permisos = permisos;}
    
    static createAdmin(){
      let user = new Usuario("administrador");
      return user;
    }
}
  let administrador = Usuario.createAdmin();