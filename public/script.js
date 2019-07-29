// console.log("Test")

// let submitButton = document.getElementById("submit-button");
// let quoteInput = document.getElementById("quote-input")

// submitButton.addEventListener("click", (e) => {
//     onclick(quoteInput.value)
//     console.log(quoteInput.value)
// })


// let onclick = (value) => {
//     var responseHandler = function() {

//     };

//     var request = new XMLHttpRequest();
//     request.addEventListener("load", responseHandler);

//     var url = "http://127.0.0.1:3000/index";
//     request.open("POST", url);
//     request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
//     let data = {
//         input: value
//     }
//     request.send(JSON.stringify(data));
// }

let quoteInput = document.getElementById("quote-input");
let button = document.getElementById("submit-button");
let ul = document.querySelector("ul");

let postRequest = (input) => {
    // what to do when we recieve the request
    var responseHandler = function () {
        console.log("response text", this.responseText);
        console.log("status text", this.statusText);
        console.log("status code", this.status);
    };
    // make a new request
    var request = new XMLHttpRequest();
    // listen for the request response
    request.addEventListener("load", responseHandler);
    // ready the system by calling open, and specifying the url
    var url = "/index";
    request.open("POST", url);
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    // send the request
    console.log("yoooo "+input );
    let data ={
        "input":input
    }
    request.send(JSON.stringify(data));
};

button.addEventListener("click", function() {
    postRequest(quoteInput.value);
    let li = document.createElement("li");
    li.innerText = quoteInput.value;
    ul.appendChild(li);
    console.log("done");
    quoteInput.value = "";

});