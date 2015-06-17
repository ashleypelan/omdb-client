var xhr = new XMLHttpRequest();
xhr.open('get', 'http://www.omdbapi.com/' + document.location.search, true);
xhr.addEventListener('load', function () {

  var response = xhr.response;
  var responseData = JSON.parse(response);
  var a = document.createElement('a');
  a.innerHTML = responseData.Title + "<br>" + "<br>" + responseData.Rated + "<br>" + "<br>" + responseData.Released + "<br>" + "<br>" + responseData.Runtime + "<br>" + "<br>" + responseData.Plot;

  var p = document.createElement('p');
  p.appendChild(a);

document.body.appendChild(p);

console.log(responseData);

 });
xhr.send();
