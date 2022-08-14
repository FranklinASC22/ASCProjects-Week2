function setup(){
    createCanvas(500, 500);
    background(255,255,255);
   
}

function draw() {
    let r = random(0, 255);
    let g = random(0, 255);
    let b = random(0, 255);
    let op = random(120,180);
    fill(r, g, b, op);
    noStroke();

    let sz = random(5,35);
    let ofX = random(-25,25);
    let ofY = random(-25,25);
    ellipse(mouseX + ofX, mouseY + ofX, sz, sz);

 }
 function mouseClicked(){
   background(255,255,255);
}