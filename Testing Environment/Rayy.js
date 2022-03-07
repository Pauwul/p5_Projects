function Rayy(x, y)
{
    this.x = x;
    this.y = y;
    this.show = function()
    {
        fill(200,200,0);
        ellipse(this.x, this.y, 6, 6);

    }
    this.move = function()
    {
        this.y = this.y - 1;
    }

}