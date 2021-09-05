const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;


let engine;
//let world;

var backgroundImage;
var tree;
var stone;
var rope1;
var rope2;

function preload(){
  backgroundImage = loadImage("nature.jpg");
  stone = loadImage("stone_1.png");
}

function setup() {
  createCanvas(1000,600);

//tree=createSprite(100,300,30,30);
//tree.addImage(treeImg);
//tree.scale=0.2;

tree = createImg('tree.png');
tree.position(100,100);
tree.size(400,400);

orange= createImg('orange.png');
orange.position(200,200);
orange.size(40,40);

orange2= createImg('orange.png');
orange2.position(260,200);
orange2.size(40,40);

orange3= createImg('orange.png');
orange3.position(320,200);
orange3.size(40,40);

orange4= createImg('orange.png');
orange4.position(370,200);
orange4.size(40,40);

orange5= createImg('orange.png');
orange5.position(250,150);
orange5.size(40,40);

orange6= createImg('orange.png');
orange6.position(320,150);
orange6.size(40,40);

 rope1 = new Rope(7,{x:100,y:90});
 rope2 = new Rope(7,{x:480,y:90});

stone=Bodies.circle(100,100,20)
 //Matter.Composite.add(rope.body,stone);

  engine = Engine.create();
  world = engine.world;
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
}


function draw() 
{
  imageMode(CENTER);
  background(51);
  image(backgroundImage,500,300,width,height);

  
  //rope1.show();
 // rope2.show();
  Engine.update(engine);
 
}

