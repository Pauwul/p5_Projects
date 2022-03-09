//Shape invaders

var cube;
var circles = [];
var rays = [];
function setup() {
  createCanvas(600  , 400);
  cube = new SpaceCube();
  
  for( var i = 0 ; i < 8   ; i++)
  {
    circles[i] = new CircleInvader( i*80+80, 60);
  }
}

function draw() {
  background(51);

  for( var i = 0 ; i < circles.length ; i++)
  {
    circles[i].show();
  }
  cube.show();
}

function keyPressed()
{
  if( key == ' ')
  {
    var ray = new Rayy(ship.x, height - 20); 
    rays.push(ray);
    ray.show();
    ray.move();
  }
  if(keyCode == RIGHT_ARROW)
  {
    cube.move(1);
  }
  else if( keyCode == LEFT_ARROW)
  {
    cube.move(-1);
  } 
}