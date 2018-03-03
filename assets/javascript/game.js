
window.onload = (function() {
var wins = 0;
var losses = 0;
var guesses = 9;
var computerGuess;
var userGuess;
var letterGuess = [ ];
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","y","z"];

    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("guesses").innerHTML = guesses;
    document.getElementById("guessesSoFar").innerHTML = letterGuess;

computerGuess = letters[0]
console.log(computerGuess)

//console.log(letteris[2]);
document.onkeyup = function (event){
    guesses--;
    console.log (event.key)
userGuess = event.key;
    console.log (userGuess);
  if (computerGuess == userGuess){
      console.log ("correct");
}

//else

}

});

//var computerGuess; computerGuess[Math.floor(Math.random() * computerGuess.length)];