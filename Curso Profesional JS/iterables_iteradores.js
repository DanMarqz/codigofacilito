// let contador = {
//     [Symbol.iterator](){
//       return {
//         currentValue: 1,
//         next(){
        
//         let result = {value:null,done:false};
    
//         if(this.currentValue > 0 && this.currentValue <= 5){
//           result = {value: this.currentValue,done:false};
//           this.currentValue +=1;
//         } else{
//           result = {done:true};
//         }
        
//         return result;
        
//       }
//     };
//   }
//   }
//     for(numero of contador){console.log(numero);}

let rango = {
    min: null,
    max: null,
    currentValue: null,
    [Symbol.iterator](){
      return this;
  },
    next(){
      if(this.currentValue == null) this.currentValue = this.min;
      let result = {};
      if(this.currentValue >= this.min && this.currentValue <= this.max){
        result = {value: this.currentValue, done:false};
        this.currentValue += 1;
      } else { 
          result = { done:true };
      }
  
    return result;
  }
  };
  
  rango.min= 0;
  rango.max= 10;
  
  for(n of rango){console.log(n)}