class Plinko {
    constructor(x,y){
        var options = {
           isStatic: true
        }
      this.body = Bodies.circle(x,y,10,options);
      this.radius = 10;
      World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        fill(176, 219, 83);
        ellipseMode(RADIUS);
        circle(pos.x,pos.y,this.radius);
      }
}