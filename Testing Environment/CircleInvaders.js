function CircleInvader(x , y)
{
    this.x = x;
    this.y = y;
   
    
    this.show = function()
    {
        fill( 255, 100, 255);
        //body
        ellipse(this.x, this.y, 60, 50)
        //ears
        //right ear
        fill( 255, 150, 255)
        triangle(this.x +15, this.y - 23, this.x + 10, this.y - 15, this.x + 17, this.y -5);
        //left ear
        
        triangle(this.x -15, this.y - 23, this.x - 10, this.y - 15, this.x -17, this.y -5);
        //head
        fill(255, 100, 255);
        ellipse(this.x, this.y, 40, 40);
        //eyes
        fill(0,200,255);
        ellipse(this.x+5, this.y-5, 4,4);
        ellipse(this.x -5, this.y -5, 4 ,4);
        //snort
        fill(255,30,255);
        ellipse(this.x , this.y+4 , 12, 10);
        ellipse(this.x+ 3, this.y+4, 2, 2);
        ellipse(this.x -3, this.y+4, 2, 2);
        //bujori in obrajori
        fill(255, 20, 255);
       
        ellipse(this.x - 10, this.y + 10, 5, 7);
        //legs
        


    }
  
}
