const container = document.querySelector('#container');
console.log(container.title);
console.log(container.getAttribute("title"));

const boxes = document.getElementsByClassName('box');

for (let i = 0; i < boxes.length; i++){
    const element = boxes[i];
    element.style.backgroundColor = "brown";
    element.style.color = "white";
    element.style.fontFamily = "sans-serif";

}

boxes[1].classList.add('news');
console.log(boxes[1].classList);

boxes[1].classList.toggle("hide");

if(container.id==='container'){
    console.log(container.title);
    console.log(true);
}