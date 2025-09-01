const checkB = document.getElementById("checkB");
const paraRe = document.getElementById("paraRe");
const button = document.getElementById("but");
const visa = document.getElementById("visa");
const master = document.getElementById("master");
const pay = document.getElementById("pay");
const cardRe = document.getElementById("cardRe");

button.onclick = function(){
    if(checkB.checked){
        paraRe.textContent = `You Are Subcribe!`;
    }
    else {
        paraRe.textContent = `Your are not Subcribe :(`;
    }

    if(visa.checked){
        cardRe.textContent = `You are paying with your Visa`;
    }
    else if (master.checked){
        cardRe.textContent = `You are paying with your MasterCard`;
    }

    else if (pay.checked){
        cardRe.textContent = `You are paying with your Paypal`;
    }
    else{
        cardRe.textContent = `You must select a payment method!`;
    }
}





