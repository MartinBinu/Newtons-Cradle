class Bob{

    constructor(x,y){
       var options = {
           'restitution': 1,
           'friction': 0.3,
           'density': 1.2
       }
      
       this.body = Bodies.circle(x,y,50,options);
       this.radius = 50;
       World.add(world,this.body);
    }
 
    display(){
       push(); 
       translate(this.body.position.x,this.body.position.y);
       rotate(this.body.angle);
       ellipseMode(RADIUS);
       fill("orange");
       strokeWeight(2);
       circle(0,0,this.radius);
       pop();
    }
 
 };