const body = document.querySelector('body');
console.log(body.style.backgroundColor);
console.log(body.id);

const container = document.querySelector('#container')
console.log(container.getAttribute('style'))
container.style.backgroundColor = "orange";

const paragraphs = document.getElementsByTagName("p");

for(let i = 0; i < paragraphs.length; i++){
    const element = paragraphs[i];
    element.style.fontFamily="sans-serif";
    element.style.color = "yellow";
    
    if (element.parentNode.id==="second"){
        element.style.backgroundColor="darkgrey";
    }
}

console.log(body.children[0].children)