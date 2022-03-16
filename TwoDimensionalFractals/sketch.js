
//let rotat = PI / 4;
let rotat = 0;
let growth = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  slider = createSlider( 0, TWO_PI, PI/4, 0.01);
  growth = random(0.5, 0.8);
}

function draw() {
  background(100);
  if( key == " "){
    
    rotat = rotat + 0.03;
    
  }

  // rotat = slider.value();
  stroke(255);
  translate(width/2, height);
  branch(height/4);
  
}


function branch(len)
{
  
  
  line(0,0,0,-len);
  translate(0, -len);
  if (len > 3) {
    //push is used to save the current drawing state
    push();
    rotate( rotat );
    branch(len*growth);
    pop();
    //pop us used to restore the stored drawing state
    push();
    rotate(-rotat);
    branch(len * growth);
    pop();
  }
}