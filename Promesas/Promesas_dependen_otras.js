function GET(url){
    return new Promise(function(resolve,reject){
      let ajaxCall = new XMLHttpRequest();
      ajaxCall.open('GET',url);

      ajaxCall.onload = function(){
        if(ajaxCall.status == 200) return resolve(ajaxCall.response);
        reject(Error(ajaxCall.status));
      };

      ajaxCall.onerror = function(e){
        reject(e);
      }
      ajaxCall.send();
  });
}

function getUser(username){
    return GET('https://api.github.com/users/'+username);
}

function getRepos(repos_url){
    return GET(repos_url);
}

let getUserPromise = getUser();

let getReposPromise = getUser().then(response => {
  return getRepos(JSON.parse(response).repos_url);
}).catch(console.log);

getReposPromise.then(console.log).catch(console.log);
