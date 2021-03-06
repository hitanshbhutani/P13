

var bow , arrow,  background, redB, pinkB, greenB ,blueB ,arrowGroup;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;


function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  redBalloonImage = loadImage("red_balloon0.png");
  greenBalloonImage = loadImage("green_balloon0.png");
  pinkBalloonImage = loadImage("pink_balloon0.png");
  blueBalloonImage = loadImage("blue_balloon0.png");
  
}



function setup() {
  createCanvas(600, 600);
  
  background = createSprite(0,0,600,600);
  background.addImage(backgroundImage);
  background.scale = 3;
  
  bow = createSprite(580,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
   score = 0 ;
  
  arrowGroup = new Group();
  redB = new Group();
  pinkB = new Group();
  greenB = new Group();
  blueB = new Group();
  
}

 
function draw() {

    background.velocityX = -3 

    if (background.x < 0){
      background.x = background.width/2;
    }
  
  bow.y = World.mouseY
  
  if (keyDown("space")) {
    createArrow();
  }
  
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 80 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }
  
 if(arrowGroup.isTouching(redB))
  {
    redB.destroyEach();
    arrowGroup.destroyEach();
    score = score+1;
  }
  
 if(arrowGroup.isTouching(pinkB))
  {
    pinkB.destroyEach();
    arrowGroup.destroyEach();
    score = score+2;
  } 
  
 if(arrowGroup.isTouching(blueB))
  {
    blueB.destroyEach();
    arrowGroup.destroyEach();
    score = score+3;
  }
  
 if(arrowGroup.isTouching(greenB))
  {
    greenB.destroyEach();
    arrowGroup.destroyEach();
    score = score+4;
  }  

 
  
  drawSprites();
  text("Score: "+ score, 500,50);
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(redBalloonImage);
  red.velocityX = 7;
  red.lifetime = 150;
  red.scale = 0.1;
  redB.add(red);
  
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blueBalloonImage);
  blue.velocityX = 6;
  blue.lifetime = 150;
  blue.scale = 0.1;
  blueB.add(blue);
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(greenBalloonImage);
  green.velocityX = 5;
  green.lifetime = 150;
  green.scale = 0.1;
  greenB.add(green);   
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pinkBalloonImage);
  pink.velocityX = 7;
  pink.lifetime = 150;
  pink.scale = 1
  pinkB.add(pink);
}


 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 560;
  arrow.y=bow.y+10;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrowGroup.add(arrow);
   
}
