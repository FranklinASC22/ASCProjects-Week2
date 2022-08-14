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

let ballArray = [];
function setup(){
    createCanvas(500,500);

    for(let i = 0; i < 100; i++){
        let temp = new ball(random(0, 500), 250, 0, 255, 0, random(2,5));
        ballArray.push(temp);
    }
}
function draw(){
    background(0);


    for(let i = 0; i < ballArray.length; i++){
        fill(ballArray[i].rV,ballArray[i].gV,ballArray[i].bV);
        ellipse(ballArray[i].xP,ballArray[i].yP, 50, 50);

        ballArray[i].yP += ballArray[i].sV;

        if( ballArray[i].yP > 525){
            ballArray[i].yP = -25;        }
    }
}
class ball{
    constructor(x,y,r,g,b, sp){
        this.xP = x;
        this.yP = y;
        this.rV = r;
        this.gV = g;
        this.bV = b;
        this.sV = sp;
    }
}
