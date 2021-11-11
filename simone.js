let roundsAmt = document.querySelector("#rounds");
let playButton = document.querySelector("#play");
let B = document.querySelector("#blueSq");
let R = document.querySelector("#redSq");
let Y = document.querySelector("#yellowSq");
let G = document.querySelector("#greenSq");

var audioB = new Audio("sounds/blue.wav");
var audioR = new Audio("sounds/red.wav");
var audioY = new Audio("sounds/yellow.wav");
var audioG = new Audio("sounds/green.wav");
var audioLose = new Audio("sounds/lose.wav");
var audioNextRound = new Audio("sounds/nextRound.wav");
var audioWin = new Audio("sounds/win.mp3");
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
  if (node == B) {
    node.style.backgroundColor = "lightblue";
  }
  if (node == G) {
    node.style.backgroundColor = "lightgreen";
  }
  if (node == R) {
    node.style.backgroundColor = "hotpink";
  }
  if (node == Y) {
    node.style.backgroundColor = "yellow";
  }
  node.style.border = "";
}
function darkenColor(node) {
  if (node == B) {
    node.style.backgroundColor = "#0000bb";
  }
  if (node == G) {
    node.style.backgroundColor = "forestgreen";
  }
  if (node == R) {
    node.style.backgroundColor = "#ff0000";
  }
  if (node == Y) {
    node.style.backgroundColor = "goldenrod";
  }
  node.style.border = "";
}
function playAudio(node) {
  if (node == B) {
    audioB.play();
  }
  if (node == G) {
    audioG.play();
  }
  if (node == R) {
    audioR.play();
  }
  if (node == Y) {
    audioY.play;
  }
}
//function whiteBorder
async function playSolution(sequenceArray) {
  //for each letter play sound!

  await new Promise((resolve) =>
    setTimeout(() => {
      resolve(); // do nothing after waiting 100 ms, just alert the calling thread
    }, 800)
  );
  sequenceArray.foreach(playOneButton());
}
async function playOneButton(button) {
  lightenColor(button);

  await new Promise((resolve) =>
    setTimeout(() => {
      resolve(); // do nothing after waiting 100 ms, just alert the calling thread
    }, 400)
  );
}
playButton.addEventListener("click", function (evt) {
  playGame(roundsAmt.value);
});

B.addEventListener("mouseover", function (evt) {
  B.style.border = "solid #eeeeee .5px";
});
B.addEventListener("mouseout", function (evt) {
  darkenColor(B);
});
B.addEventListener("mousedown", function (evt) {
  lightenColor(B);
});
B.addEventListener("mouseup", function (evt) {
  darkenColor(B);
  playAudio(B);
});

R.addEventListener("mouseover", function (evt) {
  R.style.border = "solid #eeeeee .5px";
});
R.addEventListener("mouseout", function (evt) {
  darkenColor(R);
});
R.addEventListener("mousedown", function (evt) {
  lightenColor(R);
});
R.addEventListener("mouseup", function (evt) {
  darkenColor(R);
  playAudio(R);
});
G.addEventListener("mouseover", function (evt) {
  G.style.border = "solid #eeeeee .5px";
});
G.addEventListener("mouseout", function (evt) {
  darkenColor(G);
});
G.addEventListener("mousedown", function (evt) {
  lightenColor(G);
});
G.addEventListener("mouseup", function (evt) {
  darkenColor(G);
  playAudio(G);
});
Y.addEventListener("mouseover", function (evt) {
  Y.style.border = "solid #eeeeee .5px";
});
Y.addEventListener("mouseout", function (evt) {
  darkenColor(Y);
});
Y.addEventListener("mousedown", function (evt) {
  lightenColor(Y);
});
Y.addEventListener("mouseup", function (evt) {
  darkenColor(Y);
  playAudio(Y);
});
