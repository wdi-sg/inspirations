console.log("script loading");


// document.getElementById("one").addEventListener("click", submitHandler)

var responseHandler = function() {
  let response = this.responseText;
  console.log("response text", response);
  console.log("status text", this.statusText);
  console.log("status code", this.status);
};


var button = document.getElementById('one');
var input = document.getElementById('quote');

button.addEventListener('click',()=>{
    console.log(input.value);
    var ul = document.getElementsByTagName('ul');
    var li = document.createElement('li');
    console.log(ul);
    li.innerText = input.value;
    ul[0].appendChild(li);


    let data = {
        input: input.value
    };

    var request = new XMLHttpRequest();

    // listen for the request response
    request.addEventListener("load", responseHandler);
    // ready the system by calling open, and specifying the url

    var url = '/home';
    request.open("POST", url);
    request.setRequestHeader('Content-Type','application/json;charset=UTF-8');
    // send the request
    request.send(JSON.stringify(data));
})


// var submitHandler = ()=>{
//     let input = document.getElementById("quote");
//     console.log(input.target.value)
//     // console.log(input.target.value);
//     let data = {
//         input: input.target.value
//     };

//     // make a new request

// }