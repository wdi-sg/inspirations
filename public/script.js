// console.log("loading script");

// var React = require('react');

console.log('Browser Insipiration WORKS!');


    var button = document.querySelector('#new_quote');
    var list = document.querySelector("ul");
    var input = document.querySelector('#quote');


// window.onload = () => {
    button.addEventListener('click', function(event){
        console.log('quote posted');
        let quote = input.value;
        doRequest( quote );
        renderNewQuote(quote);
    });
// }

// what to do when we receive the request
var responseHandler = function() {
    console.log("response text", this.responseText);
    console.log("status text", this.statusText);
    console.log("status code", this.status);


};

var renderNewQuote = (quote) => {
    var li = document.createElement("li");
    li.innerText = quote;
    list.appendChild(li);
}

var doRequest = function(quote){
  // make a new request
  let data = {input: quote}
  var request = new XMLHttpRequest();


  // listen for the request response
  request.addEventListener("load", responseHandler);

  var url = "/quotes";
  // ready the system by calling open, and specifying the url
  request.open("POST", url);
  request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

  console.log("DATA IS");
  console.log(data)
  console.log(JSON.stringify(data))
  // send the request
  request.send(JSON.stringify(data));
};






// // var clearbutton = document.querySelector('#clear');

// // clearbutton.addEventListener('click', function(event){
// //     let body = document.querySelector('body');
// //     setTimeout(() => {
// //         // console.log("work!")
// //         body.innerHTML = "";
// //         body.style.backgroundColor = "black";
// //     }, 1000)

// // });