

let button = document.querySelector('#submitBtn');

button.addEventListener('click', function(event){

    event.preventDefault();

    let input = document.querySelector('#quote');
    let quote = input.value;

    doPostRequest(quote);

});


var doPostRequest = function(quote){

  var data = { "quote" : quote };

  var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
  var theUrl = "/quotes";

  xmlhttp.addEventListener("load", function(){

    // console.log("DONE");
    // console.log( this.responseText );

    let newUl = document.createElement('ul');
    let newLi = document.createElement('li');
    newLi.textContent = quote;
    newUl.appendChild(newLi);
    document.body.appendChild(newUl);


  });

  xmlhttp.open("POST", theUrl);
  xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

  xmlhttp.send(JSON.stringify(data));

};




  // doRequest for GET method
// let doRequest = function(quote){

//   // what to do when we receive a request
//   let responseHandler = function() {

//     let dataObj = JSON.parse(this.responseText);
//     console.log(dataObj);
//     console.log("status text", this.statusText);
//     console.log("status code", this.status);

    // var newDiv = document.createElement("div");
    // newDiv.textContent = dataObj.students[0].name;
    // document.body.appendChild(newDiv);
//   };

//   // make a new request
//   let request = new XMLHttpRequest();

//   // listen for the request response
//   request.addEventListener("load", responseHandler);

//   // ready the system by calling open, and specifying the url
//   // request.open("GET", "https://swapi.co/api/people/1");
//   request.open("GET", "http://localhost:3000/students/");

//   // send the request
//   request.send();

// };