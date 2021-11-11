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
//var audioWin = new Audio("sounds/win.wav");
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
function lightenColor(node) {
  if (node == blue) {
    node.style.backgroundColor = "lightblue";
  }
  if (node == green) {
    node.style.backgroundColor = "lightgreen";
  }
  if (node == red) {
    node.style.backgroundColor = "hotpink";
  }
  if (node == yellow) {
    node.style.backgroundColor = "yellow";
  }
  node.style.border = "";
}
function darkenColor(node) {
  if (node == blue) {
    node.style.backgroundColor = "#0000bb";
  }
  if (node == green) {
    node.style.backgroundColor = "forestgreen";
  }
  if (node == red) {
    node.style.backgroundColor = "#ff0000";
  }
  if (node == yellow) {
    node.style.backgroundColor = "goldenrod";
  }
  node.style.border = "";
}
//function whiteBorder
async function playSolution(sequenceArray) {
  //for each letter play sound!
  lightenColor(blue);
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve(); // do nothing after waiting 100 ms, just alert the calling thread
    }, 400)
  );
}
playButton.addEventListener("click", function (evt) {
  playGame(roundsAmt.value);
});

blue.addEventListener("mouseover", function (evt) {
  blue.style.border = "solid #eeeeee .5px";
});
blue.addEventListener("mouseout", function (evt) {
  darkenColor(blue);
});
blue.addEventListener("mousedown", function (evt) {
  lightenColor(blue);
});
blue.addEventListener("mouseup", function (evt) {
  darkenColor(blue);
  audioB.play();
});

red.addEventListener("mouseover", function (evt) {
  red.style.border = "solid #eeeeee .5px";
});
red.addEventListener("mouseout", function (evt) {
  darkenColor(red);
});
red.addEventListener("mousedown", function (evt) {
  lightenColor(red);
});
red.addEventListener("mouseup", function (evt) {
  darkenColor(red);
  audioR.play();
});
green.addEventListener("mouseover", function (evt) {
  green.style.border = "solid #eeeeee .5px";
});
green.addEventListener("mouseout", function (evt) {
  darkenColor(green);
});
green.addEventListener("mousedown", function (evt) {
  lightenColor(green);
});
green.addEventListener("mouseup", function (evt) {
  darkenColor(green);
  audioG.play();
});
yellow.addEventListener("mouseover", function (evt) {
  yellow.style.border = "solid #eeeeee .5px";
});
yellow.addEventListener("mouseout", function (evt) {
  darkenColor(yellow);
});
yellow.addEventListener("mousedown", function (evt) {
  lightenColor(yellow);
});
yellow.addEventListener("mouseup", function (evt) {
  darkenColor(yellow);
  audioY.play();
});
