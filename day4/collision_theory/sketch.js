let xP = 100;
let yP = 100;
let exP = 300;
let eyP = 300;

let mleft, mright, mup, mbot;
let emleft, emright, emup, embot;
 
function setup() {
    createCanvas(500, 500);
    noStroke();

    rectMode(CENTER);
}
 
function draw() {
    background(0);
   
    fill(0,0, 255);
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

    }
    else {
        fill(random(255), random(255), random(255));
        textSize(22);
        text("I'm colliding with my enemy, Ouuu!!!", 140, 480);
    }
}

