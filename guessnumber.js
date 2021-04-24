const submitButton = document.querySelector("#id_submit");
const guessNumber = document.querySelector("#id_guess_number");
const secretNumber = Math.floor(Math.random() * 10 + 1) ;
//console.log(secretNumber);
const resultContainer = document.querySelector('#id_result');
const resultElement = document.createElement("div");
resultElement.style.color = 'white';
resultElement.style.padding = '20px';
resultElement.style.textAlign = 'center';

submitButton.addEventListener("click", ()=>{
    if(guessNumber.value !=""){
        if(!Number.isNaN(guessNumber.value)){
            const guessNumberInt = parseInt(guessNumber.value);
            if(guessNumberInt === secretNumber){
                resultElement.innerText = "Your guess was correct";
                resultElement.style.backgroundColor = 'green';
            }else{
                resultElement.innerText = "Your guess was wrong, the number is " + secretNumber ;
                resultElement.style.backgroundColor = 'red';
            }
            
        }

        resultContainer.appendChild(resultElement);

    }else{
        alert("Input can't be empty ");
    }
} );
