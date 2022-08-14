//Task 1

let y = 25;

function setup() {
	createCanvas(500, 500);
	background(0);
}

function draw() {
    
    background(0, 20);
	fill(0,255,0);
    ellipse(250,y,50,);
    
   y += 3
    if(y >525){
        y = -25;
   } 
}

// Task 2
/*
let y = 25;

function setup() {
	createCanvas(500, 500);
	background(0);
}

function draw() {
    
    background(0, 20);
	ellipse(250,y,50,50);
    
   y += 3
    if(y > 525){
        y = -25;
   } 
}
function mouseClicked(){
    let r = random(0,255);
    let g = random(0,255);
    let b = random(0,255);
    fill(r,g,b);
    ellipse(250, y, 50,50);
    y = -25;   
}
*/