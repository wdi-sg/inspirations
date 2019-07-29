
var post = document.querySelector('#post-button');
var feedback = document.querySelector('#feedback');

post.addEventListener('click', function(event){
  console.log('posted');
  var quote = document.querySelector('#qoute-text').value;
  submitPost(quote);
  document.querySelector('#quote').value = "";
})



var submitPost = function(newQuote){

  var data = { 'quote': newQuote };

  var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
  var theUrl = "/";

  xmlhttp.addEventListener("load", function(){

    console.log("DONE");
    console.log( this.responseText );
  });

  xmlhttp.open("POST", theUrl);
  xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

  xmlhttp.send(JSON.stringify(data));

  return;
};
