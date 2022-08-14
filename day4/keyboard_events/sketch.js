let xP = 100;
let yP = 100;
 
function setup() {
    createCanvas(500, 500);
    noStroke();

    rectMode(CENTER);
}
 
function draw() {
    background(0);

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
}

