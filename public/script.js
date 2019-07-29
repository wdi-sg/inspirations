
var button = document.querySelector('#submit');

button.addEventListener('click', function(event){
    var input = document.querySelector('#enterQuote');
    var enterQuote = input.value;
    doPostRequest(enterQuote);
});

var doPostRequest = function(enterQuote){

  var data = {
    "quote": enterQuote
  };
  console.log(data)

  var xmlhttp = new XMLHttpRequest();
  // new HttpRequest instance

  xmlhttp.addEventListener('load', function(){
    let inspiration = document.querySelector("#inspiration");
    let list = document.createElement("li");
    list.innerText = enterQuote;
    inspiration.appendChild(list);

    console.log("DONE");
    console.log( this.responseText );
  });

  xmlhttp.open("POST", "/");
  xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xmlhttp.send(JSON.stringify(data));

};