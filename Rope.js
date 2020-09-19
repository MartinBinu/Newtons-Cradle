class Rope{

    constructor(body1,body2) {
        var options = {
            bodyA: body1,
            bodyB: body2,
            stiffness: 0.2,
            length: 300
        }
    this.rope = Matter.Constraint.create(options)
    World.add(world,this.rope)
    }
    
    display(){
    var posA = this.rope.bodyA.position
    var posB = this.rope.bodyB.position
    strokeWeight(4);
    line(posA.x,posA.y,posB.x,posB.y);
    
    }
    
    }