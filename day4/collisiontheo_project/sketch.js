let xP = 100;
let yP = 100;
let exP = 300;
let eyP = 300;

let mleft, mright, mup, mbot;
let emleft, emright, emup, embot;
r = 0;
g = 0;
b = 255;

let score = 0;
 
function setup() {
    createCanvas(500, 500);
    noStroke();

    rectMode(CENTER);
}
 
function draw() {
    background(25,255,255);
   //Task 3 Code Addition 
    textSize(32);
    fill(0);
   text("Score: "+ score, 10,30);
   
//Task 2 Code Addition
    fill(r,g,b);
    rect(exP,eyP,50,50);

    fill(255,0, 0);
    rect(xP,yP,50,50);

    if(keyIsDown(LEFT_ARROW)){
        xP -= 3; 
    }
    if(keyIsDown(RIGHT_ARROW)){
        xP += 3; 
    }
    if(keyIsDown(UP_ARROW)){
        yP -= 3; 
    }
    if(keyIsDown(DOWN_ARROW)){
        yP += 3;   
    }
    mleft = xP - 25;
    mright = xP + 25;
    mup = yP - 25;
    mbot = yP + 25;

    emleft = exP - 25;
    emright = exP + 25;
    emup = eyP - 25;
    embot = eyP + 25;

    if(mleft > emright ||mright < emleft || mup > embot || mbot < emup){
        //score ++;
    }
    else {
       // Task 1 Addition of code
        exP = random(0,400);
        eyP = random(0,400);
        r = random(0,255);
        g = random(0,255);
        b = random(0,255);
        fill(r,g,b);
   // Task 3 Addition
       score ++;
     
    }
}

