/*
1: Create Boxes
2: When mouse moves so do the boxes
3: on click change color of each box

I tried to get the color to change randomly for each box
but it didn't workd.
*/
let r = 255;
let g = 0;
let b = 0;

let r1 = 0;
let g1 = 255;
let b1 = 0;

let r2 = 0;
let g2 = 0;
let b2 = 255;

function setup(){
    createCanvas(500, 500);
    background(0,0,0);
   
}

function draw(){
  
    background(0,0,0);
    fill(r,g,b);
    rect(mouseX,100,50,50);
    fill(r1,g1,b1);
    rect(mouseX,200,50,50);
    fill(r2,g2,b2);
    rect(mouseX,300,50,50);
    
}

function mouseClicked() {
      r = random(0, 255);
      g = random(0, 255);
      b = random(0, 255);
   
     r1 = random(0, 255);
     g1 = random(0, 255);
     b1 = random(0, 255);

     r2 = random(0, 255);
     g2 = random(0, 255);
     b2 = random(0, 255);
    
 }
