var canvas;var click3;
var clickImg;

function preload(){
  clickImg = loadImage('images/ss3.png');
}
function setup() {

  createCanvas(2200, 2200);
  click1 = new Clickable();
  click1.image = clickImg;
click1.locate(20, 20);
//This function is ran when the clickable is hovered but not pressed.
click1.onHover = function () {
  this.color = "black";

  this.text = "";
}
//This function is ran when the clickable is NOT hovered.
click1.onOutside = function () {
  this.color = "#EEEEEE";
  this.text = "";
  this.textColor = "#000000";
}
//This function is ran when the clickable is pressed.
click1.onPress = function () {
  this.stroke = "#FF0000";
}
//This funcion is ran when the cursor was pressed and then
//rleased inside the clickable. If it was pressed inside and
//then released outside this won't work.
click1.onRelease = function () {
  this.x += 50;
}


  // image will stretch to fill button by default
  click4 = new Clickable();
  click4.image = clickImg;
  click4.imageScale = 1;
  click4.text = "";
  click4.locate(1200, 1000);
  click4.resize(400, 400);
  click4.onHover = function () {
    click4.imageScale = 1.1;
  }
  click4.onOutside = function () {
    click4.imageScale = 1;
    this.color = "black";
    this.text = "";

  }

  // click5 = new Clickable();
  // click5.image = clickImg;
  // click5.fitImage = true; // no stretching!
  // click5.imageScale = 1;
  // click5.text = "";
  // click5.locate(140, 1200);
  // click5.resize(120, 90);
  // click5.onHover = function () {
  //   click5.imageScale = 1.1;
  // }
  // click5.onOutside = function () {
  //   click5.imageScale = 1;
  // }

  // centered and fitted

}

function draw() {
  background(0 );
  click1.draw();
  click4.draw();

}
