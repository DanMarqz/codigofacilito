//await hace que la ejecución del código espere a que una promesa sea resuelta evitando que escribas then o que constantemente tengas que estar creando funciones anonimas para el manejo de una propuesta
//await debe de hacerse dentro de una función asincrona async

(async function(){

    let resultado = await new Promise((resolve,reject)=>{ //await evita que tengamos que usar then o funciones asincronas 
      setTimeout(resolve,400,5) //tratamos al objeto de la promesa como cualquier otro //Resultado 5
    });
    let valorDos = await new Promise((resolve,reject)=>{
      setTimeout(resolve,400,10) //Resultado 10
    });
    
    console.log(resultado+valorDos);//aquí ya no hay nada que nos haga creer que la promesa es un valor/operacion asincrono // Retorna 15
})();

//////
// async function showGithubInfo(){
//     let response = await fetch('https://api.github.com/users/DanMarqz/repos');
//     let repos = await response.json();
//     console.log(repos);
//   }
//   showGithubInfo();