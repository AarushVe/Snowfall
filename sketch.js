const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var backgroundImg;
var snow;

function preload() {
  backgroundImg = loadImage("snow1.jpg");
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  snow = new Snow(45, 10, 50);
  console.log(snow);
  
}



function draw() {
  background(backgroundImg);  
  drawSprites();
  Engine.update(engine);
  snow.display();
}