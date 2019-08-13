console.log('public/script.js console logging');
console.log("we are in the browser");

var button = document.querySelector('#btnQuotes');

button.addEventListener('click', function(event) {
    var textQuotes = document.querySelector('#textQuotes').value;
    var url = "/quotes/" + textQuotes;

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.addEventListener("load", function() {
        console.log("DONE");
        console.log(this.responseText);
    });
    xmlhttp.open("POST", url);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send();

    /*var request = new XMLHttpRequest();
    request.addEventListener("load", responseHandler);
    request.open("GET", url);
    request.send();*/

    let divQuotes = document.querySelector('#divQuotes').lastChild;
    divQuotes.innerHTML += "<li>" + textQuotes + "</li>"
    document.querySelector('#textQuotes').value = "";

});

// what to do when we recieve the request
/*var responseHandler = function() {
    let divQuotes = document.querySelector('#divQuotes').lastChild;

    divQuotes.innerHTML += "<li>" + JSON.parse(this.responseText).id + "</li>";
    console.log("response text", this.responseText);
    console.log("status text", this.statusText);
    console.log("status code", this.status);
    document.querySelector('#textQuotes').value = "";

};*/

// make a new request
var request = new XMLHttpRequest();
// listen for the request response
//request.addEventListener("load", responseHandler);