var mrect, frect;

var ob1, ob2, ob3, ob4;




function setup() {
  createCanvas(800,400);
  frect = createSprite(200, 200, 50, 50);
  frect.shapeColor = "red";
  
  mrect = createSprite(100,200,50,50);
  mrect.shapeColor = "red"

  ob1 = createSprite(100,200,50,50);
  ob1.shapeColor = "green"

  ob2 = createSprite(200,200,50,50);
  ob2.shapeColor = "green"

  ob3 = createSprite(300,200,50,50);
  ob3.shapeColor = "green"

  ob4 = createSprite(400,200,50,50);
  ob4.shapeColor = "green"




}

function draw() {
  background(255,255,255);  
  
  mrect.x = mouseX;
  mrect.y = mouseY;

  if(isTouching(mrect,ob2))
  {
     mrect.shapeColor = "red";
      ob2.shapeColor = "red";
  }
    else
    {
      mrect.shapeColor = "lightblue";
      ob2.shapeColor = "lightblue";
    }

  drawSprites();
}







