var button = document.querySelector('#button')
var input = document.querySelector('#input')
var login = document.querySelector('#login')
var logout = document.querySelector('#logout')

if (login){
  login.addEventListener('click', ()=>{
    var un = JSON.stringify (document.querySelector('#user_name').value)
    var pw = document.querySelector('#password').value

    var responseHandler = function() {
      console.log("response text", this.responseText);
      console.log("status text", this.statusText);
      console.log("status code", this.status);
      var data = JSON.parse(this.responseText)
      console.log(data[0].password)
      if (data){
        if (data[0].password === pw){
          console.log("yep!")
          document.querySelector('#loginform').remove()
          var p = document.createElement('p')
          p.innerHTML = "Welcome"+" "+data[0].user_name
          document.cookie = "user_name="+data[0].user_name
          document.cookie = "id="+data[0].id

          var btn = document.createElement('button')
          btn.id = "logout"
          btn.innerHTML = "Logout"
          
          document.querySelector('#logininfo').appendChild(p)
          document.querySelector('#logininfo').appendChild(btn)
        }else{
          console.log("nope!")
        }
      }else{
        console.log("nope!")
      }
    };
    var request = new XMLHttpRequest();
    request.addEventListener("load", responseHandler);
    var url = "http://127.0.0.1:3000/login";
    request.open("post", url, true);
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    request.send(`data=${un}`);
    // document.querySelector('#loginform').remove()
  })
}

if (logout){
  logout.addEventListener('click', ()=>{
    document.cookie = "user_name= "
    document.cookie = "id= "
    while (document.querySelector('#logininfo').firstChild){
      document.querySelector('#logininfo').removeChild(document.querySelector('#logininfo').firstChild)
    }
  })
}

button.addEventListener('click', ()=>{
  var cookies = (document.cookies)
  var un = getCookie("id")

  var data = input.value
  var responseHandler = function() {
    console.log("response text", this.responseText);
    console.log("status text", this.statusText);
    console.log("status code", this.status);
    var text = JSON.parse(this.responseText);
    console.log(text)
    var li = document.createElement('li')
    if (text.result2){
      li.innerHTML = text.result1[0].quote + " - By " + text.result2[0].user_name
    }else {
      li.innerHTML = text[0].quote
    }
    document.querySelector('#append').appendChild(li)
  };
  var dataSet = {
    un:un,
    data:data
  }


  var request = new XMLHttpRequest();
  request.addEventListener("load", responseHandler);
  var url = "http://127.0.0.1:3000/submit";
  request.open("post", url, true);
  request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
  request.send(`input=${JSON.stringify(dataSet)}`);
})

window.onload = ()=>{
  var responseHandler = function() {
    console.log("response text", this.responseText);
    console.log("status text", this.statusText);
    console.log("status code", this.status);
    var quoteList = JSON.parse(this.responseText);
    var displayQuotes = quoteList.map((obj)=>{
      var li = document.createElement('li')
      li.innerHTML = obj.quote + " - By " + obj.user_name
      document.querySelector('#append').appendChild(li)
    })
  };
  var request = new XMLHttpRequest();
  request.addEventListener("load", responseHandler);
  var url = "http://127.0.0.1:3000/submit";
  request.open("get", url, true);
  request.send();
}


function getCookie(name) {
  var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return v ? v[2] : null;
}
