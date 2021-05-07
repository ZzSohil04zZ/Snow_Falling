const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var snowF = []
// var snowF2 = []
var bgI,ground ;

function preload(){
  bgI = loadImage("snow3.jpg")
}


function setup() {
  // var canvas = createCanvas(1200, 400);
  engine = Engine.create();
  world = engine.world;
  

  // ground = new Ground(400,400,800,10)
  // snow = new Snow(200,200,50,50,PI/2)

  createCanvas(800,400);
  // createSprite(400, 200, 50, 50);
}

function draw() {
  background(bgI);  
  Engine.update(engine);
  // snow.display()


  if(frameCount%50 === 0){
    snowF.push(new Snow(random(10,750),10,10))
  }
  
  for (var i = 0;i < snowF.length;i++){
    snowF[i].display();
  }

  // ground.display()

  // if(frameCount%60 === 0){
  //   snowF2.push(new Snow2(random(10,750),10,10))
  // }
  
  // for (var j = 0;j < snowF2.length;j++){
  //   snowF2[j].display();
  // }

  drawSprites();
}


