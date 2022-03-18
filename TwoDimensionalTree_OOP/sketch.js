let tree = [];
let j = 1;
function setup() {
  createCanvas(windowWidth, windowHeight);

    
  let a = createVector(width/2, height);
  let b = createVector(width/2, height - 100)
  let root = new Branch(a, b);

  tree[0] = root ;
  

}


function mousePressed()
{
  
}
function nextBranch(){
  
  tree[j]  = tree[0].branchRight();
  tree[j+1]= tree[0].branchLeft();
  j = j + 2;
  console.log(j);
}


function draw() {
  background(100);


  for( let i = 0; i < tree.length; i++){
    tree[i].show();
  }

 
}

