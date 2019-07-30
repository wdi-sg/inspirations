var unlike = function() {

  let data = {
      id: this.id
  }

  var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance

  xmlhttp.addEventListener("load", function(){
    let button = document.getElementById(this.responseText);

    button.onclick=like;
    button.innerText='Like';

  });

  xmlhttp.open("POST", '/unlike');
  xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");


  xmlhttp.send(JSON.stringify(data));

}

var like = function() {

  let data = {
    id: this.id
  }

  var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance

  xmlhttp.addEventListener("load", function(){
    let button = document.getElementById(this.responseText);

    button.onclick=unlike;
    button.innerText='Unlike';

  });

  xmlhttp.open("POST", '/like');
  xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");


  xmlhttp.send(JSON.stringify(data));

}


var addQuote = function () {

  var data = {
  	quote: document.getElementById('inputQuote').value
  }

  var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance

  xmlhttp.addEventListener("load", function(){
      let data=JSON.parse(this.responseText);

      let div = document.createElement('div');
      div.className = 'quoteDiv';

      let list=document.createElement('li');
    	list.innerText=data.quote+" - " +data.username;

      let button=document.createElement('button');
      button.id = data.id;
      button.innerText='Like';
      button.onclick = like;

      div.prepend(button);
      div.prepend(list);

    	document.getElementById('quoteList').prepend(div);


      document.getElementById('inputQuote').value='';
  });

  xmlhttp.open("POST", '/addquote');
  xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

  xmlhttp.send(JSON.stringify(data));

}

document.getElementById('submitQuote').onclick=addQuote;


