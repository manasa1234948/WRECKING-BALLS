const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,ground, world;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground=new Ground(300,370,1200,30);
    box1=new Box(500,0,70,70)
    box2=new Box(500,70,70,70)
    box3=new Box(500,140,70,70)
    box4=new Box(500,210,70,70)
    box5=new Box(500,280,70,70)
    box6=new Box(500,350,70,70)
    box7=new Box(400,140,70,70)
    box8=new Box(400,210,70,70)
    box9=new Box(400,280,70,70)
    box10=new Box(400,350,70,70)
    
    ball=new Ball(200,200,80,80);

    rope=new Rope(ball.body,{x: 200,y: 50});
}

function draw(){
    background('blue');
    Engine.update(engine);
    //strokeWeight(4);

    ground.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();

ball.display();

rope.display();
}
function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}
