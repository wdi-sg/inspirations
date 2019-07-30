 var responseHandler = function() {
          var response = JSON.parse(this.responseText);
          console.log(response);
          for(var i=0; i<response.length;i++){
            var quotes = response[i]["quotes"];
            console.log(name);
            }
        };



        // make a new requests
        var request = new XMLHttpRequest();
        // listen for the request response
        request.addEventListener("load",responseHandler);
        // ready the system by calling open, and specifying the url
        request.open("GET", "http://api.tvmaze.com/search/shows?q="+emptyInput);
        // send the request
        request.send();