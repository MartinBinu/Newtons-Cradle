class Roof{

    constructor(x,y){
         var option ={
             'isStatic': true
         }
         this.body = Bodies.rectangle(x,y,100,50,option);
         this.width = 100;
         this.height = 50;
         World.add(world,this.body);
    }
 
    display(){
       push();
       rectMode(CENTER);
       fill("yellow")
       strokeWeight(4);
       stroke("yellow");
       rect(this.body.position.x,this.body.position.y,this.width,this.height);
       pop();
     }
 
 };