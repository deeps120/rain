
function setup() {
 canvas=createCanvas(500,500);
 ground=createSprite(250,490,500,20);
 ground.shapeColor=0;
 
}

function draw() {
 background("peach")
 spawnrain();
 drawSprites();
}
function spawnrain(){
   if( World.frameCount%10==0){
    var r=Math.round(random(2,4))
    var r2=Math.round(random(10,490))
        rain=createSprite(r2,10,5,40);
        rain.shapeColor=0;
        rain.velocityY=r;
        rain.lifetime=900;
    }
}
