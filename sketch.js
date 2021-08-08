
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

class ground
{
	constructor(x,y,w,h)
	{
		let options = {
			isStatic:true 
		};

		this.body = Bodies.rectangle(x,y,w,h,options);
		this.w = w;
		this.h = h;
		World.add(world,this.body);
	}

	display() {
		var pos = this.body.position;
		push();
		rectMode(CENTER);
		stroke(255);
		fill(127);
		rect(pos.x,pos.y,this.w,this.h);
		pop();
	}
}




function preload()
{
	
}

var ball;

function setup() {
	createCanvas(1000, 700);

	var ball_options={
		isStatic:false,
		restitution: 0.3,
		friction:0,
		density:1.2
	}

	
	engine = Engine.create();
	world = engine.world;

	groundObj = new ground(width/2,670,width,20);
	leftSide = new ground(1100,600,20,120);

	//Create the Bodies Here.

	ball = Bodies.circle(50,100,20,ball_options);
	World.add(world,ball);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  groundObj.display();
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:-0.05});
	}

}



