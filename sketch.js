
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var top1;
var bobObj1, bobObj2, bobObj3, bobObj4,bobObj5;
var thread1, thread1, thread3,thread5, thread4;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	top1 = new Top(width/2, height/2-200, 200, 20);

	bobObj1 = new Bob(width/2-80, height/2, 40);
	bobObj2 = new Bob(width/2-40, height/2, 40);
	bobObj3 = new Bob(width/2, height/2, 40);
	bobObj4 = new Bob(width/2+40, height/2, 40);
	bobObj5 = new Bob(width/2+80, height/2, 40);

	chain1 = new Thread(bobObj1.body, top1.body, -80, 0);
	chain2 = new Thread(bobObj2.body, top1.body, -40, 0);
	chain3 = new Thread(bobObj3.body, top1.body, 0, 0);
	chain4 = new Thread(bobObj4.body, top1.body, 40, 0);
	chain5 = new Thread(bobObj5.body, top1.body, 80, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(180);
  
  drawSprites();
  top1.display();

  bobObj1.display();
  bobObj2.display();
  bobObj3.display();
  bobObj4.display();
  bobObj5.display();

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

}

function keyPressed()
{
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObj1.body, bobObj1.body.position, {x: -100, y: -100});
	}
}