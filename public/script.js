var doRequest = function(value) {// what to do when we recieve the request
    var responseHandler = function() {
      // console.log("response text", this.responseText);
      // console.log("status text", this.statusText);
      // console.log("status code", this.status);
      console.log("yo")
    };

    // make a new request
    var request = new XMLHttpRequest();

    // listen for the request response
    request.addEventListener("load", responseHandler);

    // ready the system by calling open, and specifying the url
    var url = "/";
    request.open("POST", url);
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    let data ={
        "data":value
    }
    // send the request
    request.send(JSON.stringify(data));
}

var button = document.getElementById("post_btn");
var input = document.getElementById("quote");

button.addEventListener("click",()=>{
    doRequest(input.value);
    let x = document.querySelector("ul");
    let y = document.createElement("li");
    console.log(input.value);
    y.innerText = input.value;
    x.appendChild(y);
    input.value="";
})