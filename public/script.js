console.log("WORKSSSSS!!!!!!");

console.log( window.location );
// console.log( process.argv );




let button = document.querySelector('#btn');
button.addEventListener("click", function(){

    let input = document.querySelector('#input');
    let inputValue = input.value;
    var url = "/" + inputValue;


// make a new request
var request = new XMLHttpRequest();
// ready the system by calling open, and specifying the url
// request.open("GET", "https://swapi.co/api/people/1");
request.open("POST", url);
// request2.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
// send the request
request.send();

// listen for the request response
request.addEventListener("load", function(){});

///////////////////////////////////////////////////////////////////////////////
  // make a new request
  var request2 = new XMLHttpRequest();
  // ready the system by calling open, and specifying the url
  // request.open("GET", "https://swapi.co/api/people/1");
  request2.open("GET", "/");

  // send the request
  request2.send();

  // listen for the request response
  request2.addEventListener("load", responseHandler);

});



// what to do when we receive the request
var responseHandler = function() {
    console.log("response text", this.responseText);
    console.log("status text", this.statusText);
    console.log("status code", this.status);
    // let response = JSON.parse(this.responseText)
    let input = document.querySelector('#input');
    let inputValue = input.value;


    let ulField = document.querySelector('#list');


    let listItem = document.createElement('li')
    listItem.innerText = inputValue
    ulField.appendChild(listItem)
    document.querySelector('#input').value = ""



}


////////////////////////////////////////////////////////////////////////////////