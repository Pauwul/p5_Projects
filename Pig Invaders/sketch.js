//Shape invaders

var cube;
var circles = [];
var rays = [];
var permaray;
var i = 0;
var j = 0;
function setup() {
  createCanvas(800, 500);
  cube = new SpaceCube();


  permaray = new Rayy(500, 800);
  rays.push(permaray);
  //I HAVE TO DO THIS, IT'S STOOPID BUT IT WORKS
  // if (rays[0].y < 600) {
  //   rays[0].y = 800;
  // }
  // nevermind this still doesn't work

  for (var i = 0; i < 8; i++) {
    circles[i] = new CircleInvader(i * 80 + 80, 60);
  }
}

function draw() {
  background(51);

  cube.show();
  //goes through every ray object to show and move it
  for ( i = 0; i < rays.length; i++) {


    rays[i].show();
    rays[i].move();

    //verify if there's anything to delete

    //goes through every circle to see if it's interesecting with a ray
    for ( j = 0; j < circles.length; j++) {

      //checks if every ray i intersects with circle j
      if (rays[i].hits(circles[j])) {

        rays[i].desintegrate();
        circles[j].grow();
      

        console.log("FEEDING");

      }



    }
  }
  for( let i = rays.length - 1 ; i >= 0; i--){
  if (rays[i].deletus ) {
        
    rays.splice(i, 1);

  }
  }
  //show the pigs
  for (i = 0; i < circles.length; i++) {
    circles[i].show();
    circles[i].move();
    
  }
  for( i = circles.length-1; i>=0; i--)
  if( circles[i].r > 50)
    {
      circles.splice(i,1);
    }



}

function keyPressed() {

  if (key = " ") {
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