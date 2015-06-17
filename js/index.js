var h1 = document.createElement('h1');
h1.innerHTML = "OMDB Movies About...";
document.body.appendChild(h1);

//new XHR
//xhr.open, 'get', url??
//xhr. when you load ... (addEventListener)
//xhr.send()

document.getElementById("searchButton").addEventListener('click', function(){
  var userInput = document.getElementById("input").value;

  var xhr = new XMLHttpRequest();
  xhr.open('get', 'http://www.omdbapi.com/?s=' + userInput);
  xhr.addEventListener('load', function () {

    var response = xhr.response;
    var responseData = JSON.parse(response);


  for (var i = 0; i < responseData.Search.length; i++) {

    var a = document.createElement('a');
    a.innerHTML = responseData.Search[i].Title;
    var imdbid = responseData.Search[i].imdbID;
    a.href = '/show.html?i=' + imdbid + "&plot=short&r=json";

    var p = document.createElement('p');
    p.appendChild(a);
    document.body.appendChild(p);
  }
  console.log(responseData);
  });
  xhr.send();

});
