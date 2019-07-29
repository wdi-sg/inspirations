
// what to do when we recieve the request
var doRequest = function(userinput) {

    var data = { "quote": userinput };

    var responseHandler = function() {
        let parentQuote = document.querySelector("#quotes-list");
        let listChild = document.createElement('li');
        listChild.innerText= userinput;
        listChild.className= "list-group-item d-flex justify-content-between align-items-center";
        parentQuote.appendChild(listChild);

        console.log("hello")
        console.log("response text", this.responseText);
        console.log("status text", this.statusText);
        console.log("status code", this.status);
    };

    // make a new request
    var request = new XMLHttpRequest();

    // listen for the request response
    request.addEventListener("load", responseHandler);

    // ready the system by calling open, and specifying the url
    var url = "/";
    request.open("post", url);
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    // send the request
    request.send(JSON.stringify(data));
}


var button = document.getElementById("btn-input");
// var buttonAll = document.getElementById("btn-show");

// buttonAll.addEventListener("click", function() {

// })

button.addEventListener("click", function() {
    var input = document.querySelector('#input');
    var inputQuote = input.value;
    doRequest(inputQuote);
})