let age;
myBut = document.getElementById("myBut").onclick = function(){
    let input = document.getElementById("in").value;
    let age = Number(input);
    let h3  = document.getElementById("h3");

    if (age >= 18) {
    h3.textContent = "You allowed to enter sir.";
    h3.className = "allowed";
    }
    else {
    h3.textContent = "You are not allowed here kid!";
    h3.className = "denied";
    }
}


