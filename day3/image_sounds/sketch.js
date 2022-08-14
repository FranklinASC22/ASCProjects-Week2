let charI;
let bulI;
let squirI;
let charS;
let bulS;
let squirS;

function preload(){
 charI =loadImage("images/Charmander.png");
 bulI =loadImage("images/Bulbasor.png");
 squirI =loadImage("images/Squirtle.png");

 charS = loadSound("sounds/Charmander.mp3");
 bulS = loadSound("sounds/Bulbasaur.mp3");
 squirS = loadSound("sounds/Squirtle.mp3");
}

function setup() {
	createCanvas(500, 500);
	background(0);
    noStroke();

}

function draw() {
	fill(255,0,0);
    rect(100,200,100,100);
    fill(0,255,0);
    rect(200,200,100,100);
    fill(0,0,255);
    rect(300,200,100,100);

    image(charI,100, 200, 100, 100);
    image(bulI,200, 200, 100, 100);
    image(squirI,300, 200,100, 100);
}

function mouseClicked(){
    if(mouseX > 100 && mouseX < 200 && mouseY > 200 && mouseY < 300){
        charS.play();
    }
    if(mouseX > 200 && mouseX < 300 && mouseY > 200 && mouseY < 300){
        bulS.play();
    }
    if(mouseX > 300 && mouseX < 400 && mouseY > 200 && mouseY < 400){
        squirS.play();
    }
}