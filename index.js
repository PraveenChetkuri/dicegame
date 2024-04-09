//generating radom numbers
var randomNumber1 = Math.ceil(6*Math.random());
var randomNumber2 = Math.ceil(6*Math.random());

function setDiceImage(diceNumber, randomNumber) {
    var imageName = "./images/dice" + randomNumber + ".png";
    document.querySelector(".img" + diceNumber).setAttribute("src", imageName);
}

// Set the images forach dice based on the random numbers
setDiceImage(1, randomNumber1);
setDiceImage(2, randomNumber2);

if (randomNumber1 === randomNumber2) {
    document.querySelector("h2").innerHTML = "Oops! It's a tie 🔁";
}
else if(randomNumber1>randomNumber2) {
    document.querySelector("h2").innerHTML = "🥳 Player1 is the winner";
}
else {
    document.querySelector("h2").innerHTML = "Player2 is the winner 🥳";
}