// function setup(){
//     createCanvas(500,500);
// }
// function draw(){
//      background(0)
//      fill(255,0,0);
//      ellipse(150,250,100,100);
//      fill(0,255,0);
//      ellipse(250,250,100,100);
//      fill(0,0,255);
//      ellipse(350,250,100,100);
// }
let ball1;
let ball2;
let ball3;
let ballArray = [];
function setup(){
    createCanvas(500,500);

    ball1 = new ball(150,250,255,0,0);
    ball2 = new ball(250,250,0,255,0);
    ball3 = new ball(350,250,0,0,255);
  
    ballArray.push(ball1);
    ballArray.push(ball2);
    ballArray.push(ball3);
}
function draw(){
    background(0);

    fill(ball1.rV, ball1.gV, ball1.bV)
    ellipse(ball1.xP, ball1.yP, 100,100);
    
    fill(ball2.rV, ball2.gV, ball2.bV)
    ellipse(ball2.xP, ball2.yP, 100,100);
    
    fill(ball3.rV, ball3.gV, ball3.bV)
    ellipse(ball3.xP, ball3.yP, 100,100);

    for(let i = 0; i < ballArray.length; i++){
        fill(ballArray[i].rV,ballArray[i].gV,ballArray[i].bV);
        fill(ballArray[i].xP,ballArray[i].yP, 100, 100);
    }
}
class ball{
    constructor(x,y,r,g,b){
        this.xP = x;
        this.yP = y;
        this.rV = r;
        this.gV = g;
        this.bV = b;
    }
}









