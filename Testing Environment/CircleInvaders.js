function CircleInvader(x , y)
{
    this.x = x;
    this.y = y;
   
    
    this.show = function()
    {
        fill(255, 0,100);
        //body
        ellipse(this.x, this.y, 60, 50)
        //head
        ellipse(this.x, this.y, 40, 40);
        //eyes
        ellipse(this.x+5, this.y-5, 4,4);
        ellipse(this.x -5, this.y -5, 4 ,4);
        //snort
        ellipse(this.x , this.y+4 , 12, 10);
        ellipse(this.x+ 3, this.y+4, 2, 2);
        ellipse(this.x -3, this.y+4, 2, 2);
        //legs
      


    }
  
}
