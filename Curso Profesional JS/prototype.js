function User(){}

User.prototype.saludar = function(){
  console.log("hola");
}

function Admin(){}

Admin.prototype = new User();

let daniel = new Admin();

daniel.saludar();