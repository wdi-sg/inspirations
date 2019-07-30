
console.log("Javascript works!");
console.log( "browser console" );

let quoteButton = document.querySelector(#quoteButton);

quoteButton.addEventListener('click', function(event){

event.preventDefault();

let input = document.querySelector(#quotes);
let quotes = input.value;

postQuote(quotes);
}); //addeventlistener CT

var postQuote = function(quotes) {

    const data = {
        "quotes" : quotes
    }//data CT

    var XMLHTTP = new XMLHttpRequest();
    var url = "/quotes";

    xmlhttp.addEventListener("load", function(){

        let newQuote = document.createElement('li');
        newQuote.textContent = quotes;
        document.querySelector('#list').appendChild(newQuote);
}) //xmlHTTP CT

    xmlhttp.open( "postQuote", url);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    xmlhttp.send(JSON.stringify(data));

};//postQuote CT