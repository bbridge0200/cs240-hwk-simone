let roundsAmt = document.querySelector("#rounds");
let playButton = document.querySelector("#play");
let blue = document.querySelector("#blueSq");
let red = document.querySelector("#redSq");
let yellow = document.querySelector("#yellowSq");
let green = document.querySelector("#greenSq");

var audioB = new Audio("sounds/blue.wav");
var audioR = new Audio("sounds/red.wav");
var audioY = new Audio("sounds/yellow.wav");
var audioG = new Audio("sounds/green.wav");
var audioLose = new Audio("sounds/lose.wav");
var audioNextRound = new Audio("sounds/nextRound.wav");
var audioWin = new Audio("sounds/win.wav");
var audioWrong = new Audio("sounds/wrong.wav");
//1. get it to play two buttons with delay
//2. get it to play practice sequence
//3. get it to play first elemtne, 1,2 elements
//4. listen for user input

//async get Pattern...,.., cmd=start
//if color, change colors, with delay
//new audio
// change color back
//for each of the rounds play that rounds # of patterns, if click pattern matches then go to next element, else
//exit, else if its last round and they are right then.... winning screen....
function getSequence(numRounds) {
  return ["B", "R", "G", "R", "G"];
}
function playGame(numRounds) {
  //let openingSequence = get sequence(10);
  //playOpeningSequence(openingSequence)
  //let sequence = getSequence(numRounds);
  //let currRound = 1;
  //while (currRound <= numRounds) {
  //for the total number of rounds in the game
  //spotInCurrRound = 1;
  //play sequence, wait user guesses, success -> next round, fail-> lose and exit loop
  //while (spotInCurrRound <= currRound) {
  //playSol
  //for the length of this rounds sequence
  //spotInCurrRound++;
  //}
  //currRound++;
  //}

  playSolution(sequence);
}
async function playSolution(sequenceArray) {
  //for each letter play sound!
  blue.mouseDown;
  blue.mouseUp;
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve(); // do nothing after waiting 100 ms, just alert the calling thread
    }, 400)
  );
  green.mouseDown;
  green.mouseUp;
}
playButton.addEventListener("click", function (evt) {
  playGame(roundsAmt.value);
});

blue.addEventListener("mouseover", function (evt) {
  blue.style.border = "solid #eeeeee .5px";
});
blue.addEventListener("mouseout", function (evt) {
  blue.style.border = "";
  blue.style.backgroundColor = "#0000bb";
});
blue.addEventListener("mousedown", function (evt) {
  blue.style.backgroundColor = "lightblue";
  blue.style.border = "";
});
blue.addEventListener("mouseup", function (evt) {
  blue.style.backgroundColor = "#0000bb";
  audioB.play();
});

red.addEventListener("mouseover", function (evt) {
  red.style.border = "solid #eeeeee .5px";
});
red.addEventListener("mouseout", function (evt) {
  red.style.border = "";
  red.style.backgroundColor = "#ff0000";
});
red.addEventListener("mousedown", function (evt) {
  red.style.backgroundColor = "hotpink";
  red.style.border = "";
});
red.addEventListener("mouseup", function (evt) {
  red.style.backgroundColor = "#ff0000";
  audioR.play();
});
green.addEventListener("mouseover", function (evt) {
  green.style.border = "solid #eeeeee .5px";
});
green.addEventListener("mouseout", function (evt) {
  green.style.border = "";
  green.style.backgroundColor = "forestgreen";
});
green.addEventListener("mousedown", function (evt) {
  green.style.backgroundColor = "lightgreen";
  green.style.border = "";
});
green.addEventListener("mouseup", function (evt) {
  green.style.backgroundColor = "forestgreen";
  audioG.play();
});
yellow.addEventListener("mouseover", function (evt) {
  yellow.style.border = "solid #eeeeee .5px";
});
yellow.addEventListener("mouseout", function (evt) {
  yellow.style.border = "";
  yellow.style.backgroundColor = "goldenrod";
});
yellow.addEventListener("mousedown", function (evt) {
  yellow.style.backgroundColor = "yellow";
  yellow.style.border = "";
});
yellow.addEventListener("mouseup", function (evt) {
  yellow.style.backgroundColor = "goldenrod";
  audioY.play();
});
