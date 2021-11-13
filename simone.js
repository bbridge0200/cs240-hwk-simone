let roundsAmt = document.querySelector("#rounds");
let playButton = document.querySelector("#play");
let B = document.querySelector("#blueSq");
let R = document.querySelector("#redSq");
let Y = document.querySelector("#yellowSq");
let G = document.querySelector("#greenSq");
let text = document.querySelector("#status");
let body = document.querySelector("body");
let isPlaying = false;
let spotInSequence = 0;
let currSequence = [];
let currRound = 0;

function getSequence(numRounds) {
  let arr = [];
  if (numRounds == "welcome") {
    numRounds = 10;
  }
  for (let i = 0; i < numRounds; i++) {
    let rand = Math.floor(Math.random() * 4);
    if (rand === 0) {
      arr[i] = "B";
    }
    if (rand === 1) {
      arr[i] = "G";
    }
    if (rand === 2) {
      arr[i] = "R";
    }
    if (rand === 3) {
      arr[i] = "Y";
    }
  }
  return arr;
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
  if (node == body) {
    node.style.backgroundColor = "hotpink";
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
  if (node == body) {
    node.style.backgroundColor = "DeepSkyBlue";
  }
  node.style.border = "";
}
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

async function buttonPress(node, milliseconds) {
  await new Promise((r) => setTimeout(r, milliseconds));
  lightenColor(node);
  playAudio(node);
  await new Promise((r) => setTimeout(r, milliseconds));
  darkenColor(node);
}
function playWelcome(sequenceArray) {
  playSequence(sequenceArray, 0, 120);
}
async function playSequence(sequenceArray, delay1, delay2) {
  //for each letter play sound!
  await new Promise((r) => setTimeout(r, delay1));

  for (let i = 0; i < sequenceArray.length; i++) {
    let node = convertToNode(sequenceArray[i]);
    await buttonPress(node, delay2);
  }
}
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

playButton.addEventListener("click", async function (evt) {
  //reset screen
  clearGame();
  currRound = 1;
  isPlaying = true;
  let wel = getSequence("welcome");
  playWelcome(wel); //play welcome sequence
  currSequence = getSequence(roundsAmt.value);
  await new Promise((r) => setTimeout(r, 4000)); //wait 4 seconds
  playSequence(currSequence.slice(0, currRound), 0, 400);
});
async function checkClick(node) {
  if (isPlaying) {
    if (node === convertToNode(currSequence[spotInSequence])) {
      let x = currRound - 1;
      if (spotInSequence === x) {
        console.log("current Round" + currRound);
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
        console.log("else case");
        spotInSequence++;
        text.innerHTMl =
          "So far so good! " + (currRound - spotInSequence) + "more to go!";
      }
    } else {
      //wrong node
      playAudio("wrong");
      isPlaying = false;
      lose();
    }
  }
}
function lose() {
  text.innerHTML = "Incorrect! You lose!";
  lightenColor(body);
  playAudio("lose");
}
function win() {
  text.innerHTML = "Yay you win!";
  darkenColor(body);
  playAudio("win");
}
function clearGame() {
  isPlaying = false;
  spotInSequence = 0;
  currSequence = [];
  currRound = 0;
  text.innerHTML = "";
  body.style.backgroundColor = "black";
}
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
  //TODO MULTIPLE CLICKS IN A ROW
  darkenColor(B);
  playAudio(B);
  checkClick(B);
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
  checkClick(R);
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
  checkClick(G);
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
  checkClick(Y);
});
