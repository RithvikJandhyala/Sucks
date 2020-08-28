const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Render = Matter.Render;
var ground1,ground2;
var box1,box2,box3,box4,box5,box6;
var box7,box8,box9,box10,box11,box12;
var stone,slingshot;
var score = 0;
var bg = "day.jpg";
var backgroundImg
function preload(){
  timechange();
}
function setup() {
  createCanvas(1000,400);
  engine = Engine.create();
  world = engine.world;
  ground1 = new Ground(500,300,200,20);
  ground2 = new Ground(800,200,200,20);
  box1 = new Box(750,155,50,50);
  box2 = new Box(800,155,50,50);
  box3 = new Box(850,155,50,50);
  box4 = new Box(775,105,50,50);
  box5 = new Box(825,105,50,50);
  box6 = new Box(800,55,50,50);

  box7 = new Box(450,255,50,50);
  box8 = new Box(500,255,50,50);
  box9 = new Box(550,255,50,50);
  box10 = new Box(475,205,50,50);
  box11 = new Box(525,205,50,50);
  box12 = new Box(500,155,50,50);

  stone = new Stone(200,200,50,50);
  slingshot = new SlingShot(stone.body,{x:150,y:50});

}

function draw() {
  if(backgroundImg){
    background(backgroundImg);
  } 
  Engine.update(engine);
  ground1.display();
  ground2.display();
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
  box11.display();
  box12.display();
  stone.display();
  slingshot.display();
  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  text("SCORE:"+score,750,400);
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}
function keyPressed(){
  if(keyCode===32){
      slingshot.attach(stone.body);
  }
}
async function timechange(){
  var v1 = await fetch("http://worldtimeapi.org/api/timezone/America/Phoenix");
  var v2 = await v1.json();
  var v3 = v2.datetime;
  var v4 = v3.slice(11,13);
  console.log(v4);
  if (v4>= 6 && v4 <=18){
      bg = "day.png"
  }
  else{
      bg = "night.jpg"
  }
  backgroundImg = loadImage(bg);
}