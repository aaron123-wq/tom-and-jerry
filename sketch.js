var cat,mouse
function preload() {
    //load the images here
 catImg=loadImage("images/cat1.png")
 mouseImg=loadImage("images/mouse1.png")
gardenImg=loadImage("images/garden.png")
catMovingImg=loadAnimation("images/cat2.png","images/cat3.png")
mouseMovingImg=loadAnimation("images/mouse2.png","images/mouse3.png")
catMovingImg1=loadAnimation("images/cat4.png")
mouseMovingImg1=loadAnimation("images/mouse4.png")

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat=createSprite(920,600)
cat.addImage(catImg)
mouse=createSprite(200,600)
mouse.addImage(mouseImg)
cat.scale=0.2
mouse.scale=0.1


}

function draw() {
background(gardenImg);    
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
        cat.velocityX=0
        cat.addAnimation("catMoving",catMovingImg1)
        cat.changeAnimation("catMoving",catMovingImg1)
        mouse.addAnimation("mouseMoving",mouseMovingImg1)
        mouse.changeAnimation("mouseMoving",mouseMovingImg1)  
    }
    
    
    drawSprites();
}


function keyPressed(){
if(keyCode===LEFT_ARROW){
   cat.velocityX=-5
    cat.addAnimation("catMoving",catMovingImg)
    cat.changeAnimation("catMoving",catMovingImg)
    mouse.addAnimation("mouseMoving",mouseMovingImg)
    mouse.changeAnimation("mouseMoving",mouseMovingImg)
}
  
//For moving and changing animation write code here


}
