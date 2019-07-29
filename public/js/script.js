var button = document.querySelector('#btn-submit');

button.addEventListener('click', function(event){
	var input = document.querySelector('#text-input').value;
	if (input.trim() != "") {
		sendAjax(input);
	}
	else {
		console.log("blank");
	}
});

const sendAjax = (input) => {
	var data = { "quote": input };
	console.log(data);

	var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance

	xmlhttp.addEventListener("load", function(){
		if (this.status = 200) {
			console.log("status code", this.status);
			let inspirations = document.querySelector("#inspiration-list");
			let listing = document.createElement('li');
			listing.innerText = input;

			inspirations.append(listing);
		}
		else {
			console.log("error");
		}
	});

	xmlhttp.open("POST", "/");
	xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	xmlhttp.send(JSON.stringify(data));
};

