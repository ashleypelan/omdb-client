var xhr = new XMLHttpRequest();
xhr.open('get', 'http://www.omdbapi.com/' + document.location.search, true);
xhr.addEventListener('load', function () {

  var response = xhr.response;
  var responseData = JSON.parse(response);
  var a = document.createElement('a');
  a.innerHTML = responseData.Title + "<br>" + "<br>" + responseData.Year + "<br>" + "<br>" + responseData.Rated + "<br>" + "<br>" + responseData.Released + "<br>" + "<br>" + responseData.Runtime + "<br>" + "<br>" + responseData.Plot;

  var p = document.createElement('p');
  p.appendChild(a);

document.body.appendChild(p);

console.log(responseData);

 });
xhr.send();

//
// var string = document.location.search
// var object = {};
// string = string.replace("?", "");
// var array = string.split("&");
// for (var i = 0; i < array.length; i++) {
//   object[array[i].split("=")[0]] = array[i].split("=")[1];
// }
//
// console.log(object);
