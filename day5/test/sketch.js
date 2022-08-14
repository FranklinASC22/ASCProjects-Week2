/* Group : Franklin Asamoah, 
Shreyansh Chhalotra, 
Ethan Baysah, Alan Reyes*/

let myXPos = 100;
let myYPos = 100;

let enemyxPos = 200;
let enemyyPos = 200;
let score = 0;

let ballArray = [];

function setup() {
   createCanvas(500, 500);
   noStroke();
   p_fill3 = color(0,0,255)
}
function draw() {
   background(25,255,255);
//Creates score in the upper left of the screen.
   textSize(32);
   fill(0);
  text("Score: "+ score, 10,30);
  
//Enemy
   fill(255,0,0);
   rect(enemyxPos,enemyyPos,50,50);
//User/Blue Ellipse
   fill(p_fill3)
   ellipse(myXPos,460,50,50)
   noFill()

   for (let i = 0; i < ballArray.length; i++) {
       fill(ballArray[i].redValue, ballArray[i].greenValue, ballArray[i].blueValue);
       ellipse(ballArray[i].xPos, ballArray[i].yPos, ballArray[i].sizeH, ballArray[i].sizeH);
       ballArray[i].yPos += ballArray[i].speedValue;
       if (ballArray[i].yPos > 525) {
           ballArray[i].yPos = -25;
       }
   }
//This allows the user to move let and right
   if (keyIsDown(LEFT_ARROW)) {
    myXPos -= 3;
  }
  if (keyIsDown(RIGHT_ARROW)) {
     myXPos += 3;
  }
}

//Ball Object
class Ball {
   constructor(x, y, H, r, g, b, speed) {
       this.xPos = x;
       this.yPos = y;
       this.sizeH = H;
       this.redValue = r;
       this.greenValue = g;
       this.blueValue = b;
       this.speedValue = speed;
   }
}
//Creates a new red ball whenever the mouse is pressed
function mousePressed() {
    let temp = new Ball(myXPos, 440, 25, 255, 0, 0,  -5);
    ballArray.push(temp);
}