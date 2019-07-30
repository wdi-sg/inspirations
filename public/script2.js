console.log('something on top');


window.onload = function() {
    console.log('the name of:' , name);
    var p = document.createElement("p");
    p.innerText = name;
    p.style.color ='black';
    document.body.appendChild(p);
};