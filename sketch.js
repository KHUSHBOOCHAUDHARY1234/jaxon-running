var path,boy, leftBoundary,rightBoundary,coin,bomb,energydrink;
var pathImg,boyImg,coinImg,energydrinkImg,bombImg;


function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadImage("Runner-1.png","Runner-2.png");
  bombImg = loadImage("bomb.png");
  energydrinkImg=loadImage("energyDrink.png");
  coinImg=loadImage("coin.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;

//creating boy running
boy = createSprite(180,340,30,30);

boy.scale=0.08;
boy.addAnimation("JakeRunning",boyImg);
  
//creating coin
coin=createSprite(200,340,10,10);

coin.addAnimation(coinImg);
coin.scale=0.02;
//creating bomb
bomb=createSprite(140,300,10,10);
bomb.scale=0.03;
bomb.addAnimation(bombImg);

//creating enrgydrink
energydrink=createSprite(280,200,10,10);
energydrink.scale=0.07;
energydrink.addAnimation(energydrinkImg);


//creating boundary

leftBoundary=createSprite(0,0,100,800);

// leftBoundary.invisible = false;
// leftBoundary.visible = true;
// leftBoundary.invisible = true;
leftBoundary.visible = false;


rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  boy.x = World.mouseX;

  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);

  
  //code to reset the background

  if(path.y > 400 ){
    path.y = height/2;
  }

  /*if(path.y > 400 ){
   
  path.y = height/2;
  }*/

  /*if(path.y > 400 ){
path.y = height/2;}*/

/*if(path.y > 400 ){path.y = height/2;}*/
  
  drawSprites();
}
 