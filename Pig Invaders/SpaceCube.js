function SpaceCube()
{
    this.x = width/2;
    this.speed = 20;
   
    this.show = function() {
        fill(255);
        strokeWeight(1);
        //body
        rect(this.x, height-60  , 20, 40 );
        //cockpit
        triangle(this.x , height-60, this.x + 10, height - 80, this.x + 20, height-60)
        //wings
        //left wing
        triangle(this.x, height-50, this.x -20, height , this.x, height-20 );
        //right wing
        triangle(this.x + 20, height-50, this.x + 40, height, this.x + 20, height -20   )
        //thrusters
        stroke('red');
        strokeWeight(4);
        point(this.x+random(0,10), height-10 + random(0,20), )
        point(this.x+random(0,10), height-10 + random(0,20), )
        point(this.x+random(0,10), height-12 + random(0,20), )
        point(this.x+random(0,20), height-12 + random(0,20), )
        stroke(255);
        strokeWeight(1);
        

    }
    this.move = function(dir){
        this.x += dir * this.speed;
    }


}