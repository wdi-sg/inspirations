console.log("we are in the browser");

//              BUTTON INPUT                       //

let collectInput = (event) => {
    alert('you clicked 1');
    var input = document.querySelector('#input1');
    var input1 = input.value;
    console.log("input1", input1);

    doRequest( input1 );
}

let collectInputUsingPost = (event) => {
    alert('you clicked 2');
    var input = document.querySelector('#input2');
    var input2 = input.value;
    doPostRequest( input2 );
}

let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');

button1.addEventListener('click', collectInput);
button2.addEventListener('click', collectInputUsingPost);

//              POST REQUEST AJAX                    //

let doPostRequest = (input) => {
    // var input = { "email": "hello@user.com", "response": { "name": "Tester" } };
    let request = new XMLHttpRequest();   // new HttpRequest instance
    let theUrl = "/quotes";

    request.addEventListener("load", function() {
        console.log('responsetext:', this.responseText);
        let parsed = JSON.parse(this.responseText);
        console.log('parsed:', parsed)

        let newDiv = document.createElement('div');
        newDiv.textContent = parsed.quotes.quote;
        newDiv.textContent = input;
        document.body.appendChild(newDiv);

    });

    request.open("POST", theUrl);
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    // this data below will be sent to index.js as request.body
    request.send(JSON.stringify({data:input}));
};


//             GET REQUEST AJAX                    //
let doRequest = (userId) => {

  // what to do when we recieve the request
  let responseHandler = function () {
    console.log("response text", this.responseText);
    console.log("status text", this.statusText);
    console.log("status code", this.status);
  };

  // make a new request
  let request = new XMLHttpRequest();

  // listen for the request response
  request.addEventListener("load", responseHandler);

  // ready the system by calling open, and specifying the url
  // request.open("GET", "https://swapi.co/api/people/1");
  let url = `/quotes/${userId}`
  console.log('url:', url)
  request.open("GET", url);

  // send the request
  request.send();
};