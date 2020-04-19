(async function(){
    try{
      let promesa = await Promise.reject('Error');
    } catch(err){
      console.log(err); 
    }
})()
/*let promesa  = fetch('https://api.github.com/users/DanMarqz/repos');
promesa.then(()=>{}).catch((err)=>{console.log(err)});*/