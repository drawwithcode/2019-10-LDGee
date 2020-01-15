var suono;
var canvas;

function preload() {
  suono = loadSound("./assets/audio2.mp3");

}


function setup() {
  canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.style("z-index", "-1");
  angleMode(DEGREES);


  //setup analyzer and music
  analyzer = new p5.Amplitude();
  analyzer.setInput(suono)

  suono.pause();
  suono.playMode('sustain');



}

function draw() {


  background(10, 5, 25);

  //display analyzer
  var volume = 0;
  volume = analyzer.getLevel();
  volume = map(volume, 0, 1, 0, height);


//camera settings
  camera(mouseY * 2, 100, mouseY * 2, 0, 0, 0, 1, 1, 1);





  //variables that contains mouse positions
  var locX = mouseX - height / 2;
  var locY = mouseY - width / 2;

  //lights
  directionalLight(200, 255, 255, locX, locY, 0);

  //ambientLight(255, 255, 255);
  pointLight(255, 255, 255, locX, locY, 0);


  //big gem
  rotateZ(5);
  rotateY(frameCount * 0.5);
  stroke(10, 5, 25);
  strokeWeight(1);
  specularMaterial(150, 0, 240);
  ellipsoid(110 + volume * 2, 130 + volume * 2, 90 + volume * 2, 4, 4);

  //first small planetoid
  translate(180, 0, 0);
  rotateZ(-frameCount * 0.6);
  rotateY(-frameCount * 0.6);
  ellipsoid(30, 27, 24, 4, 4);

  //second small planetoid
  translate(110, 0, 0);
  rotateZ(-frameCount * 0.6);
  rotateY(-frameCount * 0.6);
  ellipsoid(15, 14, 12, 4, 4);

  //third small planetoid
  translate(70, 15, 0);
  rotateZ(-frameCount * 0.6);
  rotateY(-frameCount * 0.6);
  ellipsoid(10, 7, 6, 4, 4);



}

//music switch
function mouseClicked() {
  if (suono.isPlaying() == false) {
    suono.play();

  }
}

//function to resize the canvas
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
