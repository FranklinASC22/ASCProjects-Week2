let state = "ellipse";

//Task 1 & 2 & 3
function setup(){
    createCanvas(500, 500);
    background(255,255,255);
   
}

function draw() {
    fill(0);
    rect(0,0,150,150);

    let r = random(0, 255);
    let g = random(0, 255);
    let b = random(0, 255);
    let op = random(120,180);
    fill(r, g, b, op);
    noStroke();

    let sz = random(5,35);
    let ofX = random(-25,25);
    let ofY = random(-25,25);

    

    if(state == "ellipse"){
        ellipse(mouseX + ofX, mouseY + ofY, sz, sz);
    }
    if(state == "rectangle"){
        rect(mouseX + ofX, mouseY + ofY, sz, sz);
    }
    if(state == "triangle"){
         triangle(mouseX , mouseY, mouseX + ofX, mouseY + ofY, mouseX + sz, mouseY + sz);
         
    }
 }
 function mouseClicked(){
   if (mouseX > 0 && mouseX < 150 && mouseY > 0 && mouseY < 150){
        background(255,255,255);
   }
   if(state == "ellipse"){
        state = "rectangle";
   }
   else if(state == "rectangle"){
    state = "triangle";
    
    }
    else if(state == "triangle"){
    state = "ellipse";
    }

}
