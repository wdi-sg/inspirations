console.log("WORKS!!!!!!");

console.log( window.location );
// console.log( process.argv );

    var input = document.querySelector('#quoteform');
    // console.log("QUOTE INPIY IS");
    console.log(input.value)

var button = document.querySelector('#postButton');

button.addEventListener('click', function(event){
  alert('You Posted! WOW :)');

var quoteInput = input.value;
  doPostRequest(quoteInput);
});

// var button = document.querySelector('#doPost');
// button.addEventListener('click', function(event){
//   var input = document.querySelector('#doPost');
//   doPostRequest( );
// });

var doPostRequest = function(quote){

    var li = document.createElement("li");
    var list = document.querySelector("ul");
    list.appendChild(li);
    li.innerText = quote;

    var data = { "quote" : quoteInput };

  var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
  var theUrl = "http://localhost:3000/inspirations/";

  xmlhttp.addEventListener("load", function(){

    console.log("DONE");
    console.log( this.responseText );
  });

  xmlhttp.open("POST", theUrl);
  xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

  xmlhttp.send(JSON.stringify(data));

};

var doRequest = function(){

  // what to do when we recieve the request
  var responseHandler = function() {
    console.log("response text", this.responseText);
    console.log("status text", this.statusText);
    console.log("status code", this.status);
  };

  // make a new request
  var request = new XMLHttpRequest();

  // listen for the request response
  request.addEventListener("load", responseHandler);

  // ready the system by calling open, and specifying the url
  // request.open("GET", "https://swapi.co/api/people/1");
  request.open("GET", "http://localhost:3000/inspirations/");

  // send the request
  request.send();

};