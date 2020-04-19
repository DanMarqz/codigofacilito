let iterador = {
    currentValue: 1,
    next(){
      
      let result = {value:null,done:false};
  
      if(this.currentValue > 0 && this.currentValue <= 5){
        result = {value: this.currentValue,done:false};
        this.currentValue +=1;
      } else{
        result = {done:true};
      }
      
      return result;
      
  //    return {
  //      value: null, //es cualquier dato que queramos que el iterador produzca
  //      done: true //es un booleano que indica si el iterador ha terminado de producir valores a iterar o no cuando es true es que el iterador se ha completado si es falso podemos continuar con la iteración
  //    }
    }
  };
  
  let item = iterador.next();
  
  while(!item.done){
    console.log(item.value);
    item = iterador.next();
  }