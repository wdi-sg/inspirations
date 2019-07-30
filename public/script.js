window.onload = function () {

	var responseHandler = function() {
		let data = JSON.parse(this.responseText);

		if (data.allLikes===undefined){
			data.allQuotes.map(quote => {
				let list=document.createElement('li');
				list.innerText=quote.quote+ '-' + quote.username;
				document.getElementById('quoteList').appendChild(list);
			});
		} else {
			data.allQuotes.map(quote => {
	 		    let div = document.createElement('div');
	      		div.className = 'quoteDiv';

	      		let list=document.createElement('li');
	    		list.innerText=quote.quote+" - " +quote.username;

	      		let button=document.createElement('button');
	      		button.id = quote.id;

	      		let checklike=true;

	      		data.allLikes.find(like => {
	      			if (like.quote_id===quote.id){
	      				button.innerText='Unlike';
	      				button.onclick = unlike;
	      				checklike=false;
	      			}
	      		});

	      		if (checklike){
	      			button.innerText='Like';
	      			button.onclick = like;
	      		}

	      		div.prepend(button);
	      		div.prepend(list);

	    		document.getElementById('quoteList').appendChild(div);
    		});
		}
	};

	var request = new XMLHttpRequest();

	request.addEventListener("load", responseHandler);

	request.open("GET", "/getallquotes");

	request.send();
}


