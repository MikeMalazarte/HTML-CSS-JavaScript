

function onRoll(){
    const numOfDice = document.getElementById("numOfDice").value;
    const rollResult = document.getElementById("rollResult");
    const imageResult = document.getElementById("imageResult");
    const values = [];
    const images = [];
    
    
    for(let i = 0; i < numOfDice; i++){
        const value = Math.floor(Math.random() * 6) + 1 ;
        values.push(value);
        images.push(`<img src="dicePic/${value}.png">`);
    }

    rollResult.textContent = `Dice Outcome: ${values.join(', ')}`;
    imageResult.innerHTML = images.join('');

}