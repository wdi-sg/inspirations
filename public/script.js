console.log("testing");


var button = document.querySelector('#submit');

button.addEventListener('click', function(event){
  alert('Submitted');
  var input = document.querySelector('#quote');
  var studentId = input.value;

  doRequest( studentId );
});

var doRequest = function(){

  var responseHandler = function() {
    console.log("response text", this.responseText);
    console.log("status text", this.statusText);
    console.log("status code", this.status);
  };

  var request = new XMLHttpRequest();

  request.addEventListener("load", responseHandler);

  request.open("GET", "http://localhost:3000/quotes");

  // send the request
  request.send();


};