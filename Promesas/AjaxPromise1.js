//metodo AJAX Promise 1


function getUserInfo(username){
  return new Promise(function(resolve,reject){

    let ajaxCall = new XMLHttpRequest();
    ajaxCall.open('GET','https://api.github.com/users/'+username);


    ajaxCall.onload = function(){
      if(ajaxCall.status == 200) return resolve(ajaxCall.response);
      reject(Error(ajaxCall.status));
  };

    ajaxCall.onerror = function(err){
      reject(err);
    }

    ajaxCall.send();

  });
}

getUserInfo('DanMarqz').then(console.log).catch(console.log);
getUserInfo('RyanYR354').then(console.log).catch(console.log);
