var helicopterIMG, helicopterSprite, packageSprite,packageIMG,redBlock1,redBlock2,redBlock3;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	redBlock1=createSprite(width/2,height-52,200,20);
	redBlock1.shapeColor=('red');

	redBlock2=createSprite(500,height-92,20,100);
    redBlock2.shapeColor=('red');

	redBlock3=createSprite(300,height-92,20,100);
	redBlock3.shapeColor=('red');
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)




	engine = Engine.create();
	world = engine.world;

	redBlock1Body = Bodies.rectangle(width/2,648,200,20,{restitution:0.1, isStatic:false}); 
	World.add(world, redBlock1Body);

	redBlock3Body = Bodies.rectangle(300,608,20,100,{restitution:0.1, isStatic:true});
	World.add(world, redBlock3Body); 

	redBlock2Body = Bodies.rectangle(500,608,20,100,{restitution:0.1,isStatic:true}); 
	World.add(world, redBlock2Body);
	


	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:true});
	World.add(world, packageBody);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
    packageSprite.x= packageBody.position.x 
	packageSprite.y= packageBody.position.y 

	redBlock1.x=redBlock1Body.position.x
	redBlock2.x=redBlock2Body.position.x
	redBlock3.x=redBlock3Body.position.x

  keyPressed();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	
	Matter.Body.setStatic(packageBody,false);

  }
}



