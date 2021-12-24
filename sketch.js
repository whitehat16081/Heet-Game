var bg,stricker1,stricker2
var bg_img,stricker1_img,stricker2_img





function preload(){
background.img = loadImage("bg.png");
stricker1_img = loadImage("stricker1.png");
stricker2_img = loadImage("stricker2.png")
}

function setup (){
  createCanvas(600,700);
 // bg = createSprite (width/2,height/2,10,10);
 // bg.shapeColor="black"

  stricker1 = createSprite(200,350,50,50)
  stricker1.addImage("stricker1",stricker1_img)
  stricker1.scale=0.15;
  
  stricker2 = createSprite(200,50,50,50)
  stricker2.addImage("stricker2",stricker2_img)
  stricker2.scale=0.15;

  line1=createSprite(20,350,5,700)
  line2=createSprite(580,350,5,700)
  line3=createSprite(300,20,600,5)
  line4=createSprite(300,680,600,5)
  centreLine=createSprite(300,350,600,5)
}

function draw() {
  background("black");
  stricker1.x=World.mouseX;
  stricker1.y=World.mouseY
  drawSprites();
}
