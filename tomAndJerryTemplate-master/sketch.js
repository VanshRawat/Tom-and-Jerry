var back,backImg;

var mouse,cat;

var mouseImg1,catImg1,catImg2,mouseImg2,mouseImg3,catImg3;

function preload() {
    //load the images here
   backImg=loadImage("images/garden.png");

   mouseImg1=loadImage("images/mouse1.png");
   mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png");
   mouseImg3=loadAnimation("images/mouse4.png")

   catImg1=loadImage("images/cat1.png");
   catImg2=loadAnimation("images/cat2.png","images/cat3.png");
   catImg3=loadAnimation("images/cat4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    
    back=createSprite(500,400);
    back.addImage(backImg);
    back.scale=1;
    //back.debug=true;

    mouse=createSprite(100,500);
    mouse.addImage(mouseImg1);
    mouse.addAnimation("runM",mouseImg2);
    mouse.addAnimation("sitM",mouseImg3);
    mouse.scale=0.1;
    mouse.debug=true;

    cat=createSprite(800,500);
    cat.addImage(catImg1);
    cat.addAnimation("run",catImg2);
    cat.addAnimation("sit",catImg3);
    cat.scale=0.1;
    
    
}

function draw() {

    background(255);


    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x< cat.width/2 - mouse.width/2)
    {
      cat.velocityX=0;
      cat.changeAnimation("sit",catImg3);
      mouse.changeAnimation("sitM",mouseImg3);
    }
    keyPressed();

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyDown("left")){
      cat.velocityX=-5;
      cat.changeAnimation("run",catImg2);
      mouse.changeAnimation("runM",mouseImg2);

  }

}
