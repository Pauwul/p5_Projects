function CircleInvader(x , y)
{
    this.x = x;
    this.y = y;
    this.r = 30;
    this.xdir = 1;
    this.ydir = 0;

   
    this.show = function()
    {
        stroke(0);
        strokeWeight(1);
        fill( 255, 100, 255);

        //legs
        rect(this.x - 25, this.y + 10, 10, 14);
        rect(this.x + 15, this.y + 10, 10, 14);
        
        
        //body
        ellipse(this.x, this.y, this.r * 2, this.r *2)
        //ears
        //right ear
        fill( 255, 200, 255)
        triangle(this.x +10, this.y - 26, this.x + 20, this.y - 15, this.x + 17, this.y );
        //left ear
        
        triangle(this.x -10, this.y - 26, this.x - 20, this.y - 15, this.x -17, this.y );
        //head
        fill(255, 100, 255);
        ellipse(this.x, this.y, 40, 40);
        //eyes
        fill(0,200,255);
        ellipse(this.x+5, this.y-5, 4,4);
        ellipse(this.x -5, this.y -5, 4 ,4);
        //sparkle
        fill(255);
        noStroke();
        ellipse(this.x +5, this.y -5, 1 , 1);
        ellipse(this.x +5, this.y -6, 1 , 1);
        ellipse(this.x +5, this.y -5, 2 , 2);
        stroke(1);
        //snort
        fill(255,30,255);
        ellipse(this.x , this.y+4 , 12, 10);    
        ellipse(this.x+ 3, this.y+4, 2, 2);
        ellipse(this.x -3, this.y+4, 2, 2);
        //bujori in obrajori
        fill(255, 20, 255);
        strokeWeight(0);
        ellipse(this.x - 10, this.y + 7, 6, 4);
        ellipse(this.x + 10, this.y + 7, 6, 4);
        //eyebrows
        stroke(200, 0 , 200);
        strokeWeight(1);

        // angry

        // line(this.x + 3, this.y - 8, this.x + 8, this.y -10);
        // line(this.x - 3, this.y - 8, this.x - 8, this.y - 10);
        
        // sad

        // line(this.x + 3, this.y - 10, this.x + 8, this.y -8);
        // line(this.x - 3, this.y - 10, this.x - 8, this.y - 8);
        
        // excited

        // line(this.x + 2, this.y - 7, this.x + 5, this.y -11);
        // line(this.x + 5, this.y -11, this.x + 8, this.y -7)
        // line(this.x - 2, this.y - 7, this.x  - 5, this.y -11);
        // line(this.x - 5, this.y -11, this.x - 8, this.y -7)

        // ooof

        // line(this.x + 2, this.y - 11, this.x + 5, this.y -9);
        // line(this.x + 5, this.y -9, this.x + 8, this.y -11);
        // line(this.x - 2, this.y - 11, this.x  - 5, this.y -9);
        // line(this.x - 5, this.y -9, this.x - 8, this.y -11);

         stroke(0);
    }
    //grow function
    this.grow = function() {
        this.r = this.r + 2;
    }
    this.move = function() {
        this.x = this.x + this.xdir;
        this.y = this.y + this.ydir;
        if( this.x > width || this.x < 0)
            this.xdir = -this.xdir;
        
        
    }
}

