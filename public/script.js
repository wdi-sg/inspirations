


// what to do when we recieve the request
var createQuoteResponseHandler = function() {
  console.log(this.responseText);
  console.log("status text", this.statusText);
  console.log("status code", this.status);
};

var getAllQuotes = () => {
    console.log(this.responseText);
    console.log("status text", this.statusText);
    console.log("status code", this.status);

};

let sendQuery = (responseHandler, path, reqType, value) => {
    // make a new request
    var request = new XMLHttpRequest();

    // listen for the request response
    request.addEventListener("load", responseHandler);

    // ready the system by calling open, and specifying the url
    var url = "http://127.0.0.1:3000" + path;
    request.open(reqType, url);

    let data = {
        content: value
    };
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    console.log(JSON.stringify(data));
    // send the request
    request.send(JSON.stringify(data));
}

let prepareQueryInput = () => {
    let createQuoteInput = document.getElementById('create-quote-input');
    createQuoteInput.addEventListener('change', function(event){
        var currentInput = event.target.value;
        inputHappened(currentInput);
    });
};

var inputHappened = function(currentInput){
    console.log("CURRENT INPUT(QUOTE CONTENT): "+currentInput);
    sendQuery(createQuoteResponseHandler, '/quote', 'POST', currentInput);

};

window.onload = () => {
    console.log("entering script.js");
    sendQuery(getAllQuotes, '/', 'GET');
    prepareQueryInput();


};