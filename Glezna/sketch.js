function setup() {
    createCanvas(1000, 800);
    
  }
  
  function draw() {
    //background(240);
    
    noFill();
    
    stroke (100, 10);
    strokeWeight (1);
    
    circle(190,190, random (80, 200));
    
    line(200,-50,380, random(300, 90));
    
    circle (200,200, random(80, 1000));
    
    circle(30,500, random (40,300));
    
    circle(560,500, random(40,300));
    
    line(20,600,420, random(600,90));
    
    circle(90,90, random(200,300));
    
    circle(500,400, random(90,500));
    
    linija = random (300);
    //line(random(300), 0, random(300), 400);
    
    //line(linija, 0, linija, 400);
    line(300,500, linija, 0);
    line(300,300, linija, 0);
    
    ellipse (300,200, random(600));
    
    fill(random(100));
    fill(0); 
    noStroke();
    textSize(65); 
    textAlign(RIGHT, TOP); 
    text('Freedom', width -10, 50);
    text('Sophia Rimkus', width -2,120)
    
  }
   
  