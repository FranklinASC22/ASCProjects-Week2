function setup() {
    createCanvas(500, 500);
    background(100, 100, 220);
    strokeWeight(5);
    
    //Body
    
    circle(250,130,100,100);
    fill(250,100,100);
    circle(250,220,100,100);
    fill(200,200,200);
    circle(250,300,100,100);
    //Feet
    fill(100,100,100);
    ellipse(220,350,50,30);
    ellipse(280,350,50,30);
    //Eyes & Mouth
    fill(100,100,100);
    ellipse(280,120,20,20);
    ellipse(220,120,20,20);
    ellipse(250,155,30,20);
    //Nose
    fill(230,90,34);
    triangle(250,130,250,140,150,150);
    //Arms
    line(160,250,220,200);
    line(280,200,340,250);
    //Ground
    fill(0,255,0);
    rect(0,365,500,135);
 }

 