function Rayy(x, y)
{
    this.x = x;
    this.y = y;
    this.r = 4;
    this.speed = 3;
    //flag variable
    this.deletus = false;
    this.show = function()
    {
        fill(200,200,0);
        ellipse(this.x, this.y, this.r*2, this.r*2);

    }
    this.move = function()
    {
        this.y = this.y - this.speed;
    }
    this.hits = function( circle ) {
        let d = dist(this.x, this.y, circle.x, circle.y);
        if( d < this.r + circle.r){
            return true;
        } else{
            return false;
        }
    }
    this.desintegrate = function() {
        this.deletus = true;
    }

}