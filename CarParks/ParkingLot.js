function ParkingLot()
{
    this.x = width/2 - 40;
    this.y =  80;
    this.h = 10;
    this.w = 80;
    this.i = 20;
    this.slots = [];

    this.show = function(){
        fill(200, 200, 0);
        strokeWeight(2);
        rect(this.x, this.y, this.w, this.h);
        stroke(255);
        strokeWeight(1);
    }

  
    
}

