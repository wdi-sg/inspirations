


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

let sendQuery = (responseHandler, path, reqType) => {
    // make a new request
    var request = new XMLHttpRequest();

    // listen for the request response
    request.addEventListener("load", responseHandler);

    // ready the system by calling open, and specifying the url
    var url = "http://127.0.0.1:3000" + path;
    request.open(reqType, url);

    // send the request
    request.send();
}

let loadQueryButton = () => {
    let createQuoteBtn = document.getElementById('create-quote-btn');
    createQuoteBtn.addEventListener('click', sendQuery(createQuoteResponseHandler, '/quote', 'GET'));
};

window.onload = () => {
    console.log("entering script.js");
    sendQuery(getAllQuotes, '/', 'GET');
    loadQueryButton();


};