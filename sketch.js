var dog;
var happyDog;
var database;
var foodS=0;
var foodStock;



function preload()
{

   dog_image=loadImage("Dog.png")	
   happyDog_image=loadImage("happydog.png")
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database()
  foodStock=database.ref("food")
  foodStock.on("value",readStock)

  dog= createSprite(200,200)
  dog.addImage("ab",happyDog_image)
  dog.addImage("cd",dog_image)
  dog.scale=0.5
  
}
function draw() {  
background(46,139,87);

if(keyDown(UP_ARROW)) {
  foodS=foodS+1;
  writeStock(foodS);
  dog.changeImage("ab",happyDog_image)
}
else {dog.changeImage("cd",dog_image)}

  drawSprites();
  

}

function readStock(data) {
  foodS=data.val();
}

function writeStock(x) {
  database.ref('/').update({
    food:x
  })
}

