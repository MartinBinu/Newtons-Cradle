
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var obj1,obj2,obj3,obj4,obj5,obj6,roof1,roof2,roof3,roof4,roof5,roof6;
var rope1,rope2,rope3,rope4,rope5,rope6;

function preload()
{
	
}

function setup() {
	createCanvas(800,800);
	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
	obj1 = new Bob(150,565);
	obj2 = new Bob(250,565);
	obj3 = new Bob(350,565);
	obj4 = new Bob(450,565);
	obj5 = new Bob(550,565);
	obj6 = new Bob(650,565);
	roof1 = new Roof(150,200);
	roof2 = new Roof(250,200);
	roof3 = new Roof(350,200);
	roof4 = new Roof(450,200);
	roof5 = new Roof(550,200);
	roof6 = new Roof(650,200);
	rope1 = new Rope(obj1.body,roof1.body)
	rope2 = new Rope(obj2.body,roof2.body)
	rope3 = new Rope(obj3.body,roof3.body)
	rope4 = new Rope(obj4.body,roof4.body)
	rope5 = new Rope(obj5.body,roof5.body)
	rope6 = new Rope(obj6.body,roof6.body)
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("purple");
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  rope6.display();
  obj1.display();
  obj2.display();
  obj3.display();
  obj4.display();
  obj5.display();
  obj6.display();
  roof1.display();
  roof2.display();
  roof3.display();
  roof4.display();
  roof5.display();
  roof6.display();
  drawSprites();
}

function keyPressed(){
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(obj6.body,obj6.body.position,{x: 705,y: -705});
}
}