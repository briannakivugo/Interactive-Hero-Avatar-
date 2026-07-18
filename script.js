let toggle = false;

function setup() {
  createCanvas(400, 400);
}

function draw() {
   // backround
  background(240, 220, 130); 
  stroke(0);
  strokeWeight(2);

  // Feather
  fill(240);
  ellipse(100, 120, 15, 150);
  line(100, 20, 100, 150);

 // Head
fill(120, 80, 50);
ellipse(200, 200, 220, 270);

// Hair
fill(0);
arc(200, 135, 196, 150, 180, 360);
  
  // Beaded headband
stroke(0);

  fill(255);
rect(100, 160, 8, 12);
  
fill(255);
rect(108, 160, 8, 12);
  
fill(255);
rect(112, 160, 8, 12);

fill(255, 0, 0);
rect(120, 160, 8, 12);

fill(0, 0, 255);
rect(128, 160, 8, 12);

fill(255, 255, 0);
rect(136, 160, 8, 12);

fill(255);
rect(144, 160, 8, 12);

fill(255, 0, 0);
rect(152, 160, 8, 12);

fill(0, 0, 255);
rect(160, 160, 8, 12);

fill(255, 255, 0);
rect(168, 160, 8, 12);

fill(255);
rect(176, 160, 8, 12);

fill(255, 0, 0);
rect(184, 160, 8, 12);

fill(0, 0, 255);
rect(192, 160, 8, 12);

fill(255, 255, 0);
rect(200, 160, 8, 12);

fill(255);
rect(208, 160, 8, 12);

fill(255, 0, 0);
rect(216, 160, 8, 12);

fill(0, 0, 255);
rect(224, 160, 8, 12);

fill(255, 255, 0);
rect(232, 160, 8, 12);

fill(255);
rect(240, 160, 8, 12);

fill(255, 0, 0);
rect(248, 160, 8, 12);

fill(0, 0, 255);
rect(256, 160, 8, 12);

fill(255, 255, 0);
rect(264, 160, 8, 12);

fill(255);
rect(272, 160, 8, 12)

  fill(255, 0, 0);
rect(248, 160, 8, 12);

fill(0, 0, 255);
rect(256, 160, 8, 12);

fill(255, 255, 0);
rect(264, 160, 8, 12);

fill(255);
rect(272, 160, 8, 12)

fill(255);
rect(284, 160, 8, 12)

  fill(255);
rect(292, 160, 8, 12)
  
  fill(255);
  rect(300, 160, 8, 12)

  //big jewerly
  fill(255 );
ellipse(200, 146, 32, 32)

  //headband
  fill(120, 80, 50);
rect (195,60, 10, 70)
  
  // Ears
  fill(120, 80, 50);
  ellipse(95, 205, 28, 50,);
  ellipse(305, 205, 28, 50);

  // Earrings
  line(95, 230, 95, 270);
  fill(255);
  ellipse(95, 245, 8, 8);
  fill(255, 0, 0);
  ellipse(95, 258, 8, 8);

  line(305, 230, 305, 270);
  fill(255);
  ellipse(305, 245, 8, 8);
  fill(255, 0, 0);
  ellipse(305, 258, 8, 8);

  // Eyes
  if (toggle == true) {
    line(145, 200, 175, 200);
    line(225, 200, 255, 200);
  } else {
    fill(255);
    ellipse(160, 200, 35, 20);
    ellipse(240, 200, 35, 20);

    fill(0);
    ellipse(160, 200, 10, 10);
    ellipse(240, 200, 10, 10);
  }

  // Nose
  line(200, 205, 198, 235);
  line(198, 235, 205, 235);

  // Mouth
if (toggle == true) {
  fill(255, 105, 180); 
  // Pink smile
  arc(200, 275, 50, 25, 0, 180);
}
else if (toggle == false) {
  fill(255, 0, 0); 
  // Red smile
  arc(200, 275, 50, 25, 0, 180);
}

 
  // Instructions
  noStroke();
  fill(0);
  textAlign(CENTER);
  textSize(14);
  text("Click to close my eyes. Click again to open them.", 200, 380);
   text('It always seems impossible until it is done. — Nelson Mandela', 210, 30);
 
 
}


/* FUNCTIONS */

function mousePressed() {
  toggle = !toggle;  }
