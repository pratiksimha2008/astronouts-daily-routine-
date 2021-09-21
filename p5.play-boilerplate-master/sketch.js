let bath ;
let brush ;
let drink ;
let gym1, gym2 ;
let iss;
let move;
let eat ;
let sleep ;
let astronout


function preload(){
  bath=loadAnimation("bath1.png","bath2.png");
  brush=loadImage("brush.png");
  drink=loadAnimation("drink1.png","drink2.png");
  gym1=loadAnimation("gym1.png","gym2.png");
  gym2=loadAnimation ("gym11.png","gym12.png");
  iss=loadImage("iss.png");
  sleep=loadImage("sleep.png");
  move=loadAnimation("move.png","move1.png");
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  
  
  astronout=createSprite(300,230);
  astronout.addAnimation("sleeping",sleep);
  astrnout.scale=0.1;

  
}

function draw() {
  background(iss);  
  drawSprites();

textSize(25);
textcolour(red);
text("up arrow= brushing ", 400, 200);

textSize(25);
textcolor(red);
text("down arrow = gyming ",430, 230 );

textSize(25);
textcolor(red);
text ("left arrow = eating",460, 260 );

textsize 
textcolor(red);
text("m arrow = moving",490,290);
    

if (keyDown("UP_ARROW")){
  astronout.addAnimation("brushing",brush);
  astronout.changeAnimation("brushing");
  astronout.y=350;
  astronout.velocityX=0;
  astronout.velocityY=0;
}

else if (keyDown(DOWN_ARROW)){
  astronout.addAnimation("gyming",gym);
  astronout.changeAnimation("gyming");
  astronout.y=350;
  astronout.velocityX=0;
  astronout.velocityY=0;
}

else if (keyDown("LEFT_ARROW")){
  astronout.addAnimation("eating",eat);
  astrnout.changeAnimation("eating");
  astronout.y=350;
  astronout.velocityX=0;
  astronout.velocityY=0;
}
else if(keyDown("RIGHT_ARROW")){
  astronout.addAnimation("bathing",bath);
  astronout.changeAnimation("bathing");
  astronout.y=350;
  astronout.velocityX=0;
  astronout.velocityY=0;

}

else if (keyDown("m")){
  astronout.addAnimation("moving",move);
  astronout.changeAnimation("moving");
  astronout.y=350;
  astronout.velocityX=0;
  astronout.velocityY=0;
}


}