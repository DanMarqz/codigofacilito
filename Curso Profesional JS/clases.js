class Curso{ //Class declaration - Declaración
  
    constructor(titulo){
      this.titulo = titulo;
    }
    
    
    inscribir(usuario){
      console.log(usuario + " se ha isncrito")
    }
  } 
  
  
  let javaScriptCurso = new Curso("Curso profesional de JavaScript");
  
  console.log(javaScriptCurso.titulo);
  javaScriptCurso.inscribir("Daniel");
  
  /*
  let Curso = class{} //class expresion
  let Usuario = class Usuario {} //class expresion
  */