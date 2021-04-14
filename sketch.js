//declaring the variables
var mr, fr;

function setup() {
  //creating canvas
  createCanvas(1200,800);

  //creating sprites and their collider radius visible
  mr = createSprite(400,400,30,80);
  fr = createSprite(400,600,80,30);
  mr.debug = true;
  fr.debug = true;
}

function draw() {
  //making background black
  background(0,0,0); 

  //Allowing for the moving rectangle to move
  mr.x = World.mouseX;
  mr.y = World.mouseY;

  //creating the algorithm for detecting collision
if(mr.x - fr.x < mr.width / 2 + fr.width / 2 && fr.x - mr.x < mr.width / 2 + fr.width / 2 && mr.y - fr.y < mr.height / 2 + fr.height / 2 && fr.y - mr.y < mr.height / 2 + fr.height / 2){
  mr.shapeColor = "red";
  fr.shapeColor = "red";
}
else{
  mr.shapeColor = "green";
  fr.shapeColor = "green";
}

//drawing all sprites
  drawSprites();
}