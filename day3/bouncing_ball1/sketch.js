let xpos = 250;
let ypos = 250;
let xp;
let yp;
let xd = 1;
let yd = 1;
function setup() {
	createCanvas(500, 500);
	background(0);
   xp = random(-5,5);
   yp = random(-5,5);

}

function draw() {
    
    background(0, 20);
	fill(0,255,0);
    ellipse(xpos,ypos,50,50);
    xpos += xp * xd;
    ypos += yp * yd;
    
   if(xpos < 25 || xpos >475){
    xd *= -1;
   }
   if(ypos <25 || ypos > 472){
    yd *= -1;
}
   
}