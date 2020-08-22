const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5,ground;
var log1,log2,log3,log4;
var pig1,pig2;
var bird

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    box2 = new Box(700,520,70,70);
    box1 = new Box(920,520,70,70);
    pig1 = new Pig(810,550);
    log1 = new Log(810,460,300,PI/2);

    box3 = new Box(700,440,70,70);
    box4 = new Box(920,440,70,70);
    pig2 = new Pig(810,420);
    log2 = new Log(810,380,300,PI/2);

    box5 = new Box(810,360,70,70);
    log3 = new Log(760,320,150,PI/7);
    log4 = new Log(870,320,150,-PI/7);
    ground = new Ground(600,590,1200,20);

    bird = new Bird(200,100);

}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    ground.display();

    box5.display();
    log3.display();
    log4.display();

    bird.display();
}