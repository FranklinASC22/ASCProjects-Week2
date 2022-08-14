let st = 1;
let me = "State #1";
function setup(){
    createCanvas(500,500);
}
function draw(){
    if(st == 1){
        background(255,0,0);
    }
    else if(st == 2){
        background(0,255,0);
    }
    else if(st == 3){
        background(0,0,255);
    }
    fill(255);
    textSize(50);
    text(me, 15, 60);
}
function mouseClicked(){
    if(st == 1){
        st = 2;
        me = "State #2";
    }
    else if(st == 2){
        st = 3;
        me = "State #3 ";
    }
    else if(st == 3){
        st = 1;
        me = "State #1 ";
    }
}