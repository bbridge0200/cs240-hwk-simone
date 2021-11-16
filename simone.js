/* SIMONE HOMEWORK CSCI 240
11/15/21
AUTHOR: BEE BRIDGE */
let roundsAmt = document.querySelector("#rounds");
let playButton = document.querySelector("#play");
let B = document.querySelector("#blueSq");
let R = document.querySelector("#redSq");
let Y = document.querySelector("#yellowSq");
let G = document.querySelector("#greenSq");
let buttons = [B, R, Y, G];
let text = document.querySelector("#status");
let body = document.querySelector("body");
let isPlaying = false;
let spotInSequence = 0;
let currSequence = [];
let currRound = 0;
let welcomeSequence = [];
/*
lightens the color of the given node to
its lighter color
*/
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
  if (node == body) {
    node.style.backgroundColor = "hotpink";
  }
  node.style.border = "";
}
/*
darkens the color of the node
or screen provided
*/
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
  if (node == body) {
    node.style.backgroundColor = "DeepSkyBlue";
  }
  node.style.border = "";
}
/*
plays the audio for the provided node
or text
*/
function playAudio(node) {
  if (node == B) {
    let audioB = new Audio("sounds/blue.wav");
    audioB.play();
  }
  if (node == G) {
    let audioG = new Audio("sounds/green.wav");
    audioG.play();
  }
  if (node == R) {
    let audioR = new Audio("sounds/red.wav");
    audioR.play();
  }
  if (node == Y) {
    let audioY = new Audio("sounds/yellow.wav");
    audioY.play();
  }
  if (node == "lose") {
    let audioL = new Audio("sounds/lose.wav");
    audioL.play();
  }
  if (node == "nextRound") {
    let audioNR = new Audio("sounds/nextRound.wav");
    audioNR.play();
  }
  if (node == "win") {
    let audioW = new Audio("sounds/win.mp3");
    audioW.play();
  }
  if (node == "wrong") {
    let audioWR = new Audio("sounds/wrong.wav");
    audioWR.play();
  }
}
/*
plays the button sound and changes the colors
with the provided delay
*/
async function buttonPress(node, milliseconds) {
  await new Promise((r) => setTimeout(r, milliseconds));
  lightenColor(node);
  playAudio(node);
  await new Promise((r) => setTimeout(r, milliseconds));
  darkenColor(node);
}
/*
plays the welcome sequence, with appropriate delay
*/
function playWelcome(sequenceArray) {
  playSequence(sequenceArray, 0, 120);
}
/*
plays the audio for each sound in a sequence
*/
async function playSequence(sequenceArray, delay1, delay2) {
  //for each letter play sound!
  await new Promise((r) => setTimeout(r, delay1));

  for (let i = 0; i < sequenceArray.length; i++) {
    let node = convertToNode(sequenceArray[i]);
    await buttonPress(node, delay2);
  }
}
/*
Converts a string to a button object 
created above
*/
function convertToNode(node) {
  if (node == "B") {
    return B;
  }
  if (node == "G") {
    return G;
  }
  if (node == "R") {
    return R;
  }
  if (node == "Y") {
    return Y;
  }
}
/*
EVENT LISTENER FOR THE PLAY BUTTON. STARTS GAME WITH SPECIFIED NUMBER OF ROUNDS. 
DEFAULTS TO 10 ROUNDS ON INVALID INPUT.Uses API to get the sequence for welcome 
and for the game given the number of rounds
*/
playButton.addEventListener("click", async function (evt) {
  //reset screen
  clearGame();
  currRound = 1;
  isPlaying = true;
  const axios = require("axios");

  try {
    const hdrs = {
      headers: { Accept: "application/json" },
    };
    let response = await axios.get(
      "http://cs.pugetsound.edu/~dchiu/cs240/api/simone/?cmd=start",
      hdrs
    );
    welcomeSequence = response.data.sequence;
    playWelcome(welcomeSequence);

    let str =
      "http://cs.pugetsound.edu/~dchiu/cs240/api/simone/?cmd=getSolution&rounds=" +
      roundsAmt.value;
    let response2 = await axios.get(str, hdrs);

    currSequence = response2.data.key;

    await new Promise((r) => setTimeout(r, 4000)); //wait 4 seconds
    playSequence(currSequence.slice(0, currRound), 0, 400);
  } catch (err) {
    return "error!";
  }
});
/*
Checks a click during game play to see if it is the
correct or incorrect move in the game. try catch around axios call. 
*/
async function checkClick(node) {
  if (isPlaying) {
    if (node === convertToNode(currSequence[spotInSequence])) {
      let x = currRound - 1;
      if (spotInSequence === x) {
        if (currRound === currSequence.length) {
          //game is over, you won
          win();
        } else {
          //end of current round
          //display success message:
          playAudio("nextRound");
          text.innerHTML = "Good job! Prepare for next round.";
          await new Promise((r) => setTimeout(r, 800));
          spotInSequence = 0;
          currRound++;
          text.innerHTML = "Round " + currRound + " of " + currSequence.length;
          await new Promise((r) => setTimeout(r, 800));

          playSequence(currSequence.slice(0, currRound), 0, 400); //play next round
        }
      } else {
        text.innerHTML =
          "So far so good! " +
          (currRound - spotInSequence - 1) +
          " more to go!";
        spotInSequence++;
      }
    } else {
      //wrong node
      playAudio("wrong");
      isPlaying = false;
      lose();
    }
  }
}
/*
Displays lose message, plays audio, and changes the screen color.
*/
function lose() {
  text.innerHTML = "Incorrect! You lose!";
  lightenColor(body);
  playAudio("lose");
}
/*
Displays win message, plays audio, and changes the screen color.
*/
function win() {
  text.innerHTML = "Yay you win!";
  darkenColor(body);
  playAudio("win");
}
/*
Resets the screen and text to the 
original when a game is finished. 
*/
function clearGame() {
  isPlaying = false;
  spotInSequence = 0;
  currSequence = [];
  currRound = 0;
  text.innerHTML = "";
  body.style.backgroundColor = "black";
}
/*
for each button: highlight with user interaction
check button clicks against current game state
*/
buttons.forEach((item) => {
  item.addEventListener("mouseover", function (evt) {
    item.style.border = "solid #eeeeee .5px";
  });
  item.addEventListener("mouseout", function (evt) {
    darkenColor(item);
  });
  item.addEventListener("mousedown", function (evt) {
    lightenColor(item);
  });
  item.addEventListener("mouseup", function (evt) {
    darkenColor(item);
    playAudio(item);
    checkClick(item);
  });
});
