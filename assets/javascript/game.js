console.log(document)

// Grabbing html element by id
var header = document.getElementById("header");
console.log(header);

// Changing the innerHTML value
var scoreToMatch = document.getElementById("scoreToMatch");
console.log(scoreToMatch);

// JQUERY WAY OF ASSIGNING JAVASCRIPT VARIABLES TO HTML ELEMENTS
var wins = $("#wins")[0];
console.log(wins);

// JQUERY WAY OF ASSIGNING JAVASCRIPT VARIABLES TO HTML ELEMENTS
var losses = $("#losses")[0];
console.log(losses);

// Create Button Variables
var red = document.getElementById("red");
console.log(red);

var blue = document.getElementById("blue");
console.log(blue);

var yellow = document.getElementById("yellow");
console.log(yellow);

var green = document.getElementById("green");
console.log(green);

// Create Total Score Variable
var userScore = $("#userScore")[0];
console.log(userScore);
userScore.innerHTML = 0;

// Create Score to Match
scoreToMatch.innerHTML = getRandomInt(40, 120);

// ASSIGN RANDOM VALUES TO CRYSTALS
red.value = getRandomInt(1, 10);
console.log("The value of this gem is: " + red.value)
blue.value = getRandomInt(1, 10);
console.log("The value of this gem is: " + blue.value)
yellow.value = getRandomInt(1, 10);
console.log("The value of this gem is: " + yellow.value)
green.value = getRandomInt(1, 10);
console.log("The value of this gem is: " + green.value)

// Assign a Math.random function to the crystal buttons
function getRandomInt(min, max) {
    return Math.round(Math.random() * (max - min + 1)) + min;
}

// Create Onclick Event for Button
$(".btn").on("click", function() {
    // CHECK TO SEE IF ON CLICK IS WORKING
    console.log("I have been clicked");

    // CHECK WHAT 'THIS' IS
    console.log(this);

    // CHECK WHAT THE VALUE OF 'THIS' IS
    console.log(this.value);

    // GET NUMERICAL VALUE OF THIS.VALUE
    console.log(parseInt(this.value));
    var localVariable = parseInt(this.value);
    console.log(localVariable);

// Total Score for User
    userScore.innerHTML = parseInt(userScore.innerHTML) + localVariable;

    
});

// Create if statements for wins/losses
   if (userScore === scoreToMatch) {
    wins++;
    $("#wins").html(wins);
    console.log(wins);
   }

   else {
    losses++;
    $("#losses").html(losses);
    console.log(losses);
   }



    
