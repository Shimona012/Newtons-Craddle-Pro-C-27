
	/*const Engine = Matter.Engine;
	const World = Matter.World;
	const Bodies = Matter.Bodies;
	const Body = Matter.Body;
	const Constraint= Matter.Constraint;
	const Render = Matter.Render;

	var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5,roofObject;
	var rope1,rope2,rope3,rope4,rope5;
	//var World;


	function setup() {
		
		createCanvas(1600, 700);
		rectMode(CENTER);


 
		engine = Engine.create();
		world = engine.world;

		//Create the Bodies Here.

	roofObject= new Roof(width/2,height/4,width/7,20);
	bobDiameter=40;

	startBobPositionX=width/2;
	StartBobPositionY=height/4+500;
	bobObject1= new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	


	bobObject2= new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	bobObject3= new Bob(startBobPositionX,startBobPositionY,bobDiameter);
	bobObject4= new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	bobObject5= new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);

	
	var render=Render.create({
	element:document.body,
	engine:engine,
	options:{
		width:1200,
		height:700,
		wireframes:false
	}
	});

	
	
	rope1=new Rope(bobObject1.body,roofObject.body,-bobDiameter*2,0);
	rope2=new Rope(bobObject2.body,roofObject.body,-bobDiameter*1,0);
	rope3=new Rope(bobObject3.body,roofObject.body,0,0);
	rope4=new Rope(bobObject4.body,roofObject.body,bobDiameter*1,0);
	rope5=new Rope(bobObject5.body,roofObject.body,-bobDiameter*2,0);


	Engine.run(engine);
	



}


	function draw() {
	rectMode(CENTER);
	background(230);
	//Engine.update(engine);

	roofObject.display();	
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();


	}

	function KeyPressed(){
	if (KeyCode === UP_ARROW){

	Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});

	}
	}

	function drawLine(constraint){


	bobBodyposition=constraint.bodyA,position
	roofBodyPosition=constraint.bodyB.position

	roofBodyoffset=constraint.pointB;
	roofBodyX=roofBodyPosition.x+roofBodyoffset.x
	roofBodyY=roofBodyPosition.x+roofBodyoffset.y
	line(bobBodyPosition.x,bobBodyPosition.y,roofBodyA,roofBodyY);

	}*/

	const Engine = Matter.Engine;
	const World = Matter.World;
	const Bodies = Matter.Bodies;
	const Body = Matter.Body;
	const Render = Matter.Render;
	const Constraint = Matter.Constraint;
	var bgimg;
	
	var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5, roofObject
	var rope1,rope2,rope3, rope4,rope5;
	var world;
	function preload(){
bgimg=loadImage("newton.jpg");


	}
	function setup() {
		createCanvas(1600, 700);
		rectMode(CENTER);
	
		engine = Engine.create();
		world = engine.world;
	
		roofObject=new Roof(width/2,height/4,width/7,20);
	
		bobDiameter=40;
	
		startBobPositionX=width/2;
		startBobPositionY=height/4+500;
		bobObject1=new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
		//fill("blue");
		bobObject2=new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
		bobObject3=new Bob(startBobPositionX,startBobPositionY,bobDiameter);
		bobObject4=new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
		bobObject5=new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);
			
		//Create a Ground
	/*
	
		var render = Render.create({
		  element: document.body,
		  engine: engine,
		  options: {
			width: 1200,
			height: 700,
			wireframes: false
		  }
		});*/
	
	
		rope1=new Rope(bobObject1.body,roofObject.body,-bobDiameter*2, 0)
	
		rope2=new Rope(bobObject2.body,roofObject.body,-bobDiameter*1, 0)
		rope3=new Rope(bobObject3.body,roofObject.body,0, 0)
		rope4=new Rope(bobObject4.body,roofObject.body,bobDiameter*1, 0)
		rope5=new Rope(bobObject5.body,roofObject.body,bobDiameter*2, 0)
	
		Engine.run(engine);
		//Render.run(render);
	  
		
	}
	function draw() {
	  rectMode(CENTER);
	  background(bgimg);
	  roofObject.display();
	  rope1.display()
	  rope2.display()
	  rope3.display()
	  rope4.display()
	  rope5.display()	
	  bobObject1.display();
	  bobObject2.display();
	  bobObject3.display();
	  bobObject4.display();
	  bobObject5.display();

	 textSize(50);
	 fill("black");
	 
	 stroke("white");
	 strokeWeight(10);
	 
	  text("Newtons Cradle Visualisation",800,100);
	}
	
	function keyPressed() {
		  if (keyCode === UP_ARROW) {
	
			Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-55,y:-50});
		  }
	}
	
	function drawLine(constraint)
	{
		bobBodyPosition=constraint.bodyA.position
		roofBodyPosition=constraint.bodyB.position
	
		roofBodyOffset=constraint.pointB;
		
		roofBodyX=roofBodyPosition.x+roofBodyOffset.x
		roofBodyY=roofBodyPosition.y+roofBodyOffset.y
		line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
	}
	
	
	
	
	
	
	
