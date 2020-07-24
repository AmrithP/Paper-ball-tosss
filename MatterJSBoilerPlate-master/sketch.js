//Namespaces are being created

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//Variables for engine and world are created

var engine, world;

//Variables for objects, images and sprites are being created

var ball;

var ground;
var box1,box3,box2;
var text, textIMG;

var backgroundIMG;


function preload(){

	//Images are being loaded

	backgroundIMG = loadImage("city.png")
	textIMG = loadImage("text.png");

}


function setup() {

	//Canvas is being created

	createCanvas(1500, 480);

	//Engine and world is being created
	
	engine = Engine.create();
	world = engine.world;

	//Objects are being created from box sprites

	paper = new Paper(200,190);

	ground = new Ground(750,470,1500,20);

	box1 = new Box(1095,360,20,200);
	box3 = new Box(1275,360,20,200);
	box2 = new Box(1185,450,200,20);

	//Sprites are being created for text

	text = createSprite(150,120,200,200);
	text.addImage(textIMG);
	text.scale = 0.5

	//Engine is running

	Engine.run(engine);

}


function draw() {

  rectMode(CENTER);

  //Background is being changed to the images, loaded in function preload  

  background(backgroundIMG);

  //All objects are being displayed

  paper.display();

  ground.display();

  box2.display();
  box3.display();
  box1.display();

  //Sprites are being drawn
  
  drawSprites();
 
}

function keyPressed(){

	if(keyCode === UP_ARROW){

		//Force is being applied to x and y velocities with the push of the up arrow and the paper ball lands in the trash can 

		Matter.Body.applyForce(paper.body,paper.body.position,{x:110,y:-135});

	}

}


