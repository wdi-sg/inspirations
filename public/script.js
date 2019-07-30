console.log('chicken');
console.log("we are in the browser");

var doRequest = function(quotesID) {
    // what to do when we recieve the request
    var responseHandler = function() {
        console.log("response text", this.responseText);
        data = JSON.parse(this.responseText);
        let para = document.createElement("p")
        para.innerHTML = `${quotes}`;
        document.body.appendChild(para);
    };
    // make a new request
    var request = new XMLHttpRequest();
    // listen for the request response
    request.addEventListener("load", responseHandler);
    // ready the system by calling open, and specifying the url
    // request.open("GET", "https://swapi.co/api/people/1");
    request.open("GET", "http://localhost:3000/");
    // send the request
    request.send();
};