console.log("we are in the browser");

var button = document.getElementById("submitbtn");

button.addEventListener('click', function(event){
    var input = document.querySelector('#inputquote').value;
    console.log("input" + input);
    newquote(input);
});

var request = new XMLHttpRequest();

let newquote = function(input){
    console.log("in newquote func" + input);

    // make a new request


    // listen for the request response
    request.addEventListener("load", responseHandler);
};

// what to do when we receive the request
var responseHandler = function() {

    let output = document.getElementById('output');
    output.innerHTML += "<li>" + JSON.parse(this.responseText).id + "</li>";

    console.log("response text", this.responseText);
    console.log("status text", this.statusText);
    console.log("status code", this.status);
};

// ready the system by calling open, and specifying the url
var url = "/";
request.open("POST", url);
request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

// send the request
request.send();