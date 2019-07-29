console.log('public/script.js console logging');
console.log("we are in the browser");

var button = document.querySelector('#hello');

button.addEventListener('click', function(event) {
    var input = document.querySelector('#input').value;
    var url = "/quotes/" + input;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.addEventListener("load", function() {
        console.log("DONE");
        console.log(this.responseText);
    });
    xmlhttp.open("POST", url);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send();
    var request = new XMLHttpRequest();
    request.addEventListener("load", responseHandler);
    request.open("GET", url);
    request.send();
});

// what to do when we recieve the request
var responseHandler = function() {
    let output = document.querySelector('#output').lastChild;

    output.innerHTML += "<li>" + JSON.parse(this.responseText).id + "</li>";
    console.log("response text", this.responseText);
    console.log("status text", this.statusText);
    console.log("status code", this.status);
    document.querySelector('#input').value = "";

};

// make a new request
var request = new XMLHttpRequest();
// listen for the request response
request.addEventListener("load", responseHandler);
