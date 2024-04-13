const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var leftWall;
var rightWall;
var topWall;
var wall;
var angle = 60;

function setup(){
    createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ball_options = {
        restitution: 0.95,
        frictionAir:0.01
    }
    
    btn1 = createImg("rightarrow.png");
    btn1.position(240, 80);
    btn1.size(50, 50);
    btn1.mouseClicked(hForce);

    btn2 = createImg("up.png");
    btn2.position(217,30);
    btn2.size(50, 50);
    btn2.mouseClicked(vForce);

    btn3 = createImg("leftarrow.png")
    btn3.position(200, 89);
    btn3.size(33,33);
    btn3.mouseClicked(hForcee);

    ball = Bodies.circle(100, 10, 20, ball_options);
    World.add(world, ball);

    ground = new Ground(200, 390, 400, 20);
    rightWall = new Ground(390, 200, 20, 400);
    leftWall = new Ground(10, 200, 20, 400);
    topWall = new Ground(200, 10, 400, 20)
  

    rectMode(CENTER);
    ellipseMode(RADIUS);

}

function draw(){
    background(60);

    Engine.update(engine);

    fill(0,250,250);
    ellipse(ball.position.x, ball.position.y, 20);
    //ground.show();
    //rightWall.show();
    //leftWall.show();
    //topWall.show();
    
}

function hForce() {
    Matter.Body.applyForce(ball, {x: 0, y: 0}, {x: 0.05, y: 0});
}

function vForce() {
    Matter.Body.applyForce(ball, {x: 0, y: 0}, {x: 0, y: 0.05});
}

function hForcee() {
    Matter.Body.applyForce(ball, {x: 0, y: 0}, {x: -0.05, y: 0.05  })
}