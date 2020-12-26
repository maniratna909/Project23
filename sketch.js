var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var backg, backgIMG;
var block, block1, block2;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("123.gif")
	packageIMG=loadImage("package.png")
	backgIMG=loadImage("trees.gif")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);


	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=1

	groundSprite=createSprite(width/2, height-35, width,10);
groundSprite.shapeColor="green";
groundSprite.visible= true;

block=createSprite(470, height-35, 15,130);
block1=createSprite(280, height-35, 15,130);
block2=createSprite(370, 665, 192,13);

block.shapeColor="red";
block1.shapeColor="red";
block2.shapeColor="red";


	
engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 220 , 5 , {restitution:0.2, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
 //background(backgIMG);
   background("cyan");
//  backg= createSprite(700,900, 800,700);
//  backg.addImage(backgIMG);
 
 packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  keyPressed()
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false);
    
  }
}



