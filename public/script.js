console.log("script loading");

window.onload = function() {
    document.getElementById("one").addEventListener("click",()=>{
        submitHandler();
    })
};


// what to do when we recieve the request
var responseHandler = function() {
    //json parse
    var response = JSON.parse(this.responseText);
    console.log("response text", response.quotes);
    // console.log("status text", this.statusText);
    // console.log("status code", this.status);

    //map quotes here...
    // var allQuotes = response.quotes.map (entry => {
    //     var li = document.createElement('li');
    //     li.innerHTML = entry.quote;
    //     return li.innerHTML;
    // });

    var eachQuotes = response.quotes.map (entry => {
        return entry.quote;
    });

    // console.log(allQuotes);
      console.log(eachQuotes);


// create unorder list
    var list = document.createElement('ul');
    //create a list of item for each quote
    //and append into list
    eachQuotes.forEach(quotes => {
        var li = document.createElement('li');
        li.textContent = quotes;
        list.appendChild(li);
    });
    document.body.appendChild(list);
};

// send the request
var submitHandler = ()=>{
    // make a new request
    var request = new XMLHttpRequest();
    // listen for the request response
    request.addEventListener("load", responseHandler);
    // ready the system by calling open, and specifying the url
    // var url = "https://swapi.co/api/people/1";
    var url = "http://127.0.0.1:3000/ajax";
    request.open("GET", url);
    // send the request
    request.send();
}