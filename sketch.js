function setup() {
  createCanvas(windowWidth, windowHeight);
  noCursor();
  lOrange = color(255,154,0);
  dOrange = color(255,93,0);
  lBlue = color(0,162,255);
  dBlue = color(0,101,255);
  feetOffset = windowHeight/8;
  eyeSize = feetOffset/4;
  headOffset = eyeSize/2;
}
function draw() {
  background(220);
  stroke(255);
  strokeWeight(4);
  line(width/2,0,width/2,height);
  mirrorX = -mouseX+width
  //sightlines
  strokeWeight(1);
  stroke(127);
  line(mouseX,mouseY,mirrorX,mouseY-headOffset);
  line(mouseX,mouseY,mirrorX,mouseY+feetOffset);
  //Mirror person
  strokeWeight(4);
  stroke(63);
  fill(0);
  line(width/2,mouseY-headOffset/2,width/2,mouseY+feetOffset/2)
  ellipse(width/2,mouseY,eyeSize/2,eyeSize/2);
  //Blue person
  strokeWeight(4);
  stroke(lBlue);
  fill(dBlue);
  line(mouseX,mouseY-headOffset,mouseX,mouseY+feetOffset)
  ellipse(mouseX,mouseY,eyeSize,eyeSize);
  //Orange (mirrored) person
  strokeWeight(4);
  stroke(lOrange);
  fill(dOrange);
  line(mirrorX,mouseY-headOffset,mirrorX,mouseY+feetOffset)
  ellipse(mirrorX,mouseY,eyeSize,eyeSize);

  noStroke();
  textSize(18);
  textStyle(BOLD);
  fill(0);
  textAlign(CENTER, TOP);
  text(
    "You and the mirror virson of yourself are always exactly the same distance and size from the mirror meaning, the mirror is always exactly halfway between you two. Therefore your image in the mirror will be half the size of you, no matter how far away you go",
    width/20, height/100, width-width/10);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  setup();
}
