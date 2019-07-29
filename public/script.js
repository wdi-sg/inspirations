var button = document.querySelector('#buttonPost');

button.addEventListener('click', function(event){
  var input = document.querySelector('#text-input');
  var inputQuote = input.value;

  doPostRequest( inputQuote );
});

var doPostRequest = function(inputQuote){
  var data = { "quote": inputQuote };
  console.log(data);

  var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
  var theUrl = "/";

  xmlhttp.addEventListener("load", function(){
    if(this.status === 200){
        let inspiration = document.querySelector("#inspiration-list");
        let list = document.createElement('li');
        list.innerText= inputQuote;
        inspiration.appendChild(list);
    }else{
        console.log("error");
    }

    console.log("DONE");
    console.log( this.responseText );
  });

  xmlhttp.open("POST", theUrl);
  xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

  xmlhttp.send(JSON.stringify(data));

};



// var doRequest = function(studentId){

//   // what to do when we recieve the request
//   var responseHandler = function() {
//     console.log("response text", this.responseText);
//     console.log("status text", this.statusText);
//     console.log("status code", this.status);
//   };

//   // make a new request
//   var request = new XMLHttpRequest();

//   // listen for the request response
//   request.addEventListener("load", responseHandler);

//   // ready the system by calling open, and specifying the url
//   // request.open("GET", "https://swapi.co/api/people/1");
//   request.open("GET", "http://localhost:3000/students/"+studentId);

//   // send the request
//   request.send();


// };