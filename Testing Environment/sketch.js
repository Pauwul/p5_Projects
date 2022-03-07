//Shape invaders

var cube;
var circles = [];
// var ray;
function setup() {
  createCanvas(600  , 400);
  cube = new SpaceCube();
  // ray = new Rayy(300, 200);
  for( var i = 0 ; i < 8   ; i++)
  {
    circles[i] = new CircleInvader( i*80+80, 60);
  }
}

function draw() {
  background(51);
  // ray.show();
  // ray.move();
  for( var i = 0 ; i < circles.length ; i++)
  {
    circles[i].show();
  }
  cube.show();
}

function keyPressed()
{
  if(keyCode == RIGHT_ARROW)
  {
    cube.move(1);
  }
  else if( keyCode == LEFT_ARROW)
  {
    cube.move(-1);
  } 
}