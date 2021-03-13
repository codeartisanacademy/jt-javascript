const body = document.querySelector('body');
const h1 = document.createElement('h1');
h1.innerText = "Hello World"; // set the attribute
 
body.appendChild(h1);
console.log(h1.innerText); // get the value of the attribute

const div = document.createElement('div');
const h2 = document.createElement('h2');
h2.textContent = "This is a sub heading"
const p = document.createElement('p');
p.textContent = "A paragraph content can have many line of texts";

div.appendChild(h2);
div.appendChild(p);

body.appendChild(div);