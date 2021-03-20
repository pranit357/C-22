const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ground, ball;
var engine, world;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ground_option = {
    isStatic : true 
  }

  ground = Bodies.rectangle(200, 390, 400, 20, ground_option);
  World.add(world, ground);

  var ball_option = {
    restitution : 0.8
  }
  ball = Bodies.circle(200, 100, 20, ball_option);
  World.add(world, ball);

  console.log(ball);
}

function draw() {
  background("cyan");  
  Engine.update(engine);

  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400, 20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20, 20);
}