

let button = document.querySelector('#submitBtn');

button.addEventListener('click', function(event){

    let input = document.querySelector('#quote');

    doRequest( input );
});

var doRequest = function(quote){

  // what to do when we receive a request
  var responseHandler = function() {

    let dataObj = JSON.parse(this.responseText);
    console.log(dataObj);
    console.log("status text", this.statusText);
    console.log("status code", this.status);

    var newDiv = document.createElement("div");
    newDiv.textContent = dataObj.students[0].name;
    document.body.appendChild(newDiv);


  };

  // make a new request
  var request = new XMLHttpRequest();

  // listen for the request response
  request.addEventListener("load", responseHandler);

  // ready the system by calling open, and specifying the url
  // request.open("GET", "https://swapi.co/api/people/1");
  request.open("GET", "http://localhost:5000/students/"+studentId);

  // send the request
  request.send();

};




// FOR POST:
// var doRequest = function(studentId){

//   var data = { "email": "hello@user.com", "response": { "name": "Tester" } };

//   var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
//   var theUrl = "/what";
//   xmlhttp.open("POST", theUrl);
//   xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
//   xmlhttp.send(JSON.stringify(data));

//   return;