let roundsAmt = document.querySelector("#rounds");
let playButton = document.querySelector("#play");
let blue = document.querySelector("#blueSq");
let red = document.querySelector("#redSq");
let yellow = document.querySelector("#yellowSq");
let green = document.querySelector("#greenSq");

//async get Pattern...,.., cmd=start
//if color, change colors, with delay
//new audio
// change color back
//for each of the rounds play that rounds # of patterns, if click pattern matches then go to next element, else
//exit, else if its last round and they are right then.... winning screen....

playButton.addEventListener("click", function (evt) {
  playGame(roundsAmt.value);
});

function playGame(numRounds) {
  let sequence = getSequence(numRounds);
}
blue.addEventListener("mouseover", function (evt) {
  blue.style.border = "solid #eeeeee .5px";
});
blue.addEventListener("mouseout", function (evt) {
  blue.style.border = "";
});
red.addEventListener("mouseover", function (evt) {
  red.style.border = "solid #eeeeee .5px";
});
red.addEventListener("mouseout", function (evt) {
  red.style.border = "";
});
green.addEventListener("mouseover", function (evt) {
  green.style.border = "solid #eeeeee .5px";
});
green.addEventListener("mouseout", function (evt) {
  green.style.border = "";
});
yellow.addEventListener("mouseover", function (evt) {
  yellow.style.border = "solid #eeeeee .5px";
});
yellow.addEventListener("mouseout", function (evt) {
  yellow.style.border = "";
});

async function getSequence(numRounds) {
  return ["B", "R", "G", "R", "G"];
}
