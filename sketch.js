function setup() {
  createCanvas(800,400);
 fr = createSprite(400, 200, 50, 50);
 mr = createSprite(200,200,100,50)
 fr.debug = true
 mr.debug = true
}

function draw() {
  background(255,255,255);  
mr.x = mouseX
mr.y = mouseY
if(mr.x - fr.x<mr.width/2 + fr.width/2&&
  fr.x - mr.x<fr.width/2 + mr.width/2&&
  mr.y - fr.y<mr.height/2 + fr.height/2&&
  fr.y - mr.y<fr.height/2 + mr.height/2){
  mr.shapeColor = "red"
  fr.shapeColor = "red"

}
else{
  mr.shapeColor = "green"
  fr.shapeColor = "green"
}


  drawSprites();
}