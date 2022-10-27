var Carlos; 

function setup() {
  createCanvas(750,850);
  Carlos = createSprite (200, 200, 20, 20)
  Carlos.shapeColor = "red";
}

function draw() 
{
  background("lightblue");
  fill ("black");
  textSize (20);
  text ("Hello World", 100, 100);
  
  if (keyDown(RIGHT_ARROW)) {
  Carlos.position.x += 3;
  Carlos.shapeColor = "yellow"
  }
  
  if (keyDown(LEFT_ARROW)) {
  Carlos.position.x -= 3;
  Carlos.shapeColor = "lightgreen"
  }

  if (keyDown(UP_ARROW)) {
  Carlos.position.y -= 3;
  Carlos.shapeColor = "blue"
  }

  if (keyDown(DOWN_ARROW)) {
  Carlos.position.y += 3;
  Carlos.shapeColor = "red"
  }

  
  drawSprites();
}




