let x = 25;

function setup() {
	createCanvas(500, 500);
	background(0);
}

function draw() {
    
    background(0, 20);
	fill(0,255,0);
    ellipse(x,250,50,);
    
   x += 3
    if(x >525){
        x = -25;
   }
   
}