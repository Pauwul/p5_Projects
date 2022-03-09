//Shape invaders

var cube;
var circles = [];
var rays = [];
function setup() {
  createCanvas(600, 400);
  cube = new SpaceCube();



  for (var i = 0; i < 8; i++) {
    circles[i] = new CircleInvader(i * 80 + 80, 60);
  }
}

function draw() {
  background(51);

  cube.show();
  //goes through every ray object to show and move it
  for (var i = 0; i < rays.length; i++) {


    rays[i].show();
    rays[i].move();

    //verify if there's anything to delete
    if(rays[i].deletus){
      rays.splice(i, 1);
    }
    //goes through every circle to see if it's interesecting with a ray
    for (var j = 0; j < circles.length; j++) {
        if(rays[i].hits(circles[j])){

          circles[j].grow();
          rays[i].desintegrate();
          console.log("FEEDING");
        }
    }
  }
  //show the pigs
  for (var i = 0; i < circles.length; i++) {
    circles[i].show();
    circles[i].move();
  }



}

function keyPressed() {
  if (key == " ") {
    var ray = new Rayy(cube.x + 10, height - 83);
    rays.push(ray);

  }
  if (keyCode == RIGHT_ARROW) {
    cube.move(1);
  }
  else if (keyCode == LEFT_ARROW) {
    cube.move(-1);
  }
}