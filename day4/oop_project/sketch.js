

let ballArray = [];
function setup(){
    createCanvas(500,500);
     noStroke();
    for(let i = 0; i < 100; i++){
        r = random(0,255); 
        g = random(0,255); 
        b = random(0,255);
        sz = random(0,50);
        let temp = new ball(random(0, 500), 250, r, g, b, random(2,5), random(20,40));
        ballArray.push(temp);

    }
}
function draw(){
    background(0);


    for(let i = 0; i < ballArray.length; i++){
        fill(ballArray[i].rV,ballArray[i].gV,ballArray[i].bV);
        ellipse(ballArray[i].xP,ballArray[i].yP, ballArray[i].hV);

        ballArray[i].yP += ballArray[i].sV;

        if( ballArray[i].yP > 525){
            ballArray[i].yP = -25;        }
    }
}
class ball{
    constructor(x,y,r,g,b,sp, h){
        this.xP = x;
        this.yP = y;
        this.rV = r;
        this.gV = g;
        this.bV = b;
        this.sV = sp;
        this.hV = h;
    }
}
