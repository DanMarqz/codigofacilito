function calcular(){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,400,5);
    })
}

function segundoCalculo(numero){
    console.log(numero);
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,200,'Segunda promesa');
    })
}

//se ejecutó calcular que retornó la primera promesa, dicha promesa tardó 400ms y dio valor 5
//sobre dicha promesa se ejecutó el method then y al que se envió como argumento 'segundoCalculo' cuando la primera promesa se resuelve, segundo calculo se ejecutará y recibirá como argumetno 
calcular().then(segundoCalculo).then(console.log);