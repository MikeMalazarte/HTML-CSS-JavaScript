const guessBox = document.getElementById("guessBox");
const subButton = document.getElementById("subButton");
const msg1 = document.getElementById("msg1");
const minNum = 1;
const maxNum = 100;
const ans= Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
let attempts = 0;
let guess;


subButton.onclick = function(){

    guess = Number(guessBox.value);
    
    if(isNaN(guess)){
        window.alert(`You need to type a number!`);
    }
    else if(guess < minNum || guess> maxNum){
        window.alert(`Your need to type only from 1 to 100`);
    }
    else{
        attempts++;
        if(guess < ans){
            msg1.textContent = `TOO LOW, TRY AGAIN!`
        }
        else if (guess > ans){
            msg1.textContent = `TOO HIGH, TRY AGAIN!`
        }
        else{
            msg1.innerHTML = `CONGRATULATIONS <br> You took ${attempts} attempts to guess the correct number!`
        }

    }
    
};
    
    

