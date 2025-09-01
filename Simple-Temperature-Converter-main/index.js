const inBox = document.getElementById("inBox");
const toF = document.getElementById("toF");
const toC = document.getElementById("toC");
const res = document.getElementById("res");
let temp;



function convert(){
    if(toF.checked){
        temp = Number(inBox.value);
        temp = temp * 9 / 5 +  32;  
        res.textContent = temp + " °F"
    }
    else if (toC.checked){
        temp = Number(inBox.value);
        temp = (temp - 32) * (5 / 9);
        res.textContent = temp.toFixed(2) + " °C";
    }
    else {
        res.textContent = `Select a unit.`;
    }

}