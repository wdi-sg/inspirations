console.log('Peeled potatoes');
console.log("we are in the browser");
var square = document.getElementById("canvas");

var responseHandler = function() {
    let array = JSON.parse(this.responseText).quotesKey;
    for(i=0; i<array.length; i++){

        var paragraph = document.createElement("p");
        var id = document.createTextNode(array[i].id);
        paragraph.appendChild(id);

        var paragraphTwo = document.createElement("p");
        var quote = document.createTextNode(array[i].quote);
        paragraphTwo.appendChild(quote);

        square.appendChild(paragraph);
        square.appendChild(paragraphTwo);
    };
  console.log("response text", this.responseText);
  console.log("status text", this.statusText);
  console.log("status code", this.status);
};

// make a new request
var request = new XMLHttpRequest();

// listen for the request response
request.addEventListener("load", responseHandler);

// ready the system by calling open, and specifying the url
var url = "http://localhost:3000/display";
request.open("GET", url);

// send the request
request.send();