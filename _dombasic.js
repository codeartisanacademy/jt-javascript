// query selector finds all elements based on the parameter and give you the first one
const body = document.querySelector('body');
const infos = document.getElementsByClassName('info');
const content = document.getElementById('content')
const firstInfo = document.querySelector('.info');
console.log(body);
console.log(infos);
console.log(content);
console.log(firstInfo);
console.log(content.parentNode);
console.log(content.previousSibling);