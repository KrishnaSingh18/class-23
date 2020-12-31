const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var box1,box2,ground;

function setup(){

    var canvas = createCanvas(400,400);
    //create your physics engine
    engine = Engine.create();
    /***************************/

    //When you create physics engine, world gets created by default
    //namespacing - assign it a new name 'world'. Instead of referrign to it as engine.world, simply world is easier.
    world = engine.world;

    box1 = new Box(200,75,50,50);
    box2 = new Box(185,200,50,50);
    ground=new Ground(200,380,400,20);



  //  console.log(ground);
}

function draw(){
    background(0);

    Engine.update(engine);
   
    box1.display();
    box2.display();
    ground.display();
}