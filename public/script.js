console.log("we are in the browser");

var button = document.getElementById("submitbtn");

button.addEventListener('click', function(event){
    var input = document.querySelector('#inputquote').value;
    console.log("input " + input);
    newquote(input);

    let outputul = document.getElementById('quotelist');
    let newli = document.createElement("li");
    newli.innerText = input;
    outputul.appendChild(newli);
    input="";
});



let newquote = function(input){
    console.log("in newquote func " + input);

    // make a new request
    var request = new XMLHttpRequest();

    // listen for the request response
    request.addEventListener("load", responseHandler);
    // ready the system by calling open, and specifying the url
    var url = "/";
    request.open("POST", url);
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    let data = {
        quote : input
    }

    // send the request into app.post
    request.send(JSON.stringify(data));
};

// what to do when we receive the request
var responseHandler = function() {

    console.log("response text", this.responseText);
    console.log("status text", this.statusText);
    console.log("status code", this.status);
};