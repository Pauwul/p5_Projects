function Rayy(x, y)
{
    this.x = x;
    this.y = y;
    this.r = 4;
    this.width = 20;
    this.height = 30;
    this.speed = 3;
    this.park = false;
    //flag variable
    
    // if(this.y < 20)
    // this.deletus=true;
    this.show = function()
    {
        fill(200,200,0);
        
        rect(this.x- this.width, this.y -this.height, this.width, this.height);

    }
    this.move = function()
    {
        this.y = this.y - this.speed;
    }

    this.hits = function( ParkingLot){
        if( this.y - 20 <  ParkingLot.y){
            return true;
        }
        else {
            return false;
        }
    }

   this.encrypt = function(){
        this.no = random(0, 200);
        this.key = this.no.toString(16) ;
        console.log(this.no);
        console.log(this.key);
   }
   this.park = function(  jw ){
       this.x = j*10;
       this.y = 40;
       
       this.speed = 0;
   }
   

}