function setup() {
    createCanvas(624, 351);
  }
  
  function draw() {
    background(0);
  }

let playerPaddle;

function setup() {
    createCanvas(624,351);
    playerPaddle = new paddle(26);   
}

function draw() {
    background(0);
    playerPaddle.display();
}