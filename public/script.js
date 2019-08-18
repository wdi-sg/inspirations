console.log("script works");

var post = document.querySelector('#post-button');

post.addEventListener('click', function(event){
    alert('Submitted');
    doRequest(input);

    var input = document.querySelector('#quote-text').value;
    doRequest(input);
    document.querySelector('#quote').value = "";
    // let x = document.querySelector("ul");
    // let y = document.createElement("li");
    // console.log(input);
    // y.innerText = input;
    // x.appendChild(y);
    // input="";
});

var doRequest = function(){
    let data = {
        'quote' : value
    }
    var responseHandler = function() {
        console.log("response text", this.responseText);
        console.log("status text", this.statusText);
        console.log("status code", this.status);
    };

    var request = new XMLHttpRequest();
    request.addEventListener("load", responseHandler);
    request.open("Post", "/quotes");
    // send the request
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");


    request.send(JSON.stringify(data));

};