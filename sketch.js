//                CREATING HILL CLIMB RACING
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

//create objects
var driver ;
var engine, world;
var ground ;

function preload(){

  driver = loadImage("sprites/DriverHCR.png");

}

function setup(){
//creating canvas
createCanvas(1200,600);

engine = Engine.create();
world = engine.world;

ground = new Ground(1200,480,2400,400);

driver = new Driver(300 , 300);
}

function draw(){

  //making 
  background(115, 207, 244);

  Engine.update(engine);

ground.display();

if(ground.body.position.x < 0){

Matter.Body.setPosition(ground.body , {x : 1200 , y : 480});

}

driver.display();

console.log(driver.body.velocity.x);

}