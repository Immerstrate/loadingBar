var boxWidth = 200;
var boxHeight = 50;

var loading = 0;

var countdown = 3;

var img;

var w;
var h;

function setup() {
  createCanvas(windowWidth, windowHeight);
  img = loadImage("assets/finishedImage.png");
  w = width;
  h = height;
  textSize(32);
  textAlign(CENTER);
  frameRate(24);
}

function draw() {
	background(240);
  noFill();
  rect(w/2-(boxWidth/2), h/2-(boxHeight/2)-150, boxWidth, boxHeight);
  fill(50);
  rect(w/2-(boxWidth/2), h/2-(boxHeight/2)-150, loading, boxHeight);
  fill(0);
  text(floor(loading/2) + "% DONE", w/2, h/2 - (boxHeight/2) - 155);
  if (loading < boxWidth) {
  	loading++;
  }
  if (loading === 200) {
  	if (countdown > 0) {
  		countdown--
  	}
  	else {
  		imageMode(CENTER);
  		image(img, w/2, h/2 + 100);
  	}
	}
}