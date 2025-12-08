function setup() {
    createCanvas(624, 351);
  }
  
  function draw() {
    background(0);
  }

let playerPaddle;
let aiPaddle;

function setup() {
    createCanvas(624,351);
    playerPaddle = new paddle(26);   
    aiPaddle = new paddle(width -48)
}

function draw() {
    background(0);
    playerPaddle.display();
    aiPaddle.display();
    
}