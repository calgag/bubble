export default function sketch (p) {
  var diameter = 100;
  var speed = [];
  var direction = [];
  var x = [], y = [];
  var numberOfBubbles = 20;

  // Setup before draw
  // 1. Gets random color and sets
  // 2. Get random positions for each bubble
  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.frameRate(60);
    var r = Math.random() * 255;
    var g = Math.random() * 255;
    var b = Math.random() * 255;
    p.strokeWeight(2);
    p.stroke(r, g, b);
    p.fill(r, g, b, 127);
    for(var i = 0; i < numberOfBubbles; i++){
      speed.push(1);
      x.push(Math.random() * p.windowWidth);
      y.push(Math.random() * p.windowHeight);
    }
  };

  // Draw runs in loop
  // 1. Clear canvas
  // 2. Draws each bubble
  p.draw = function() {
    p.clear();

    for(var i = 0; i < numberOfBubbles; i++){
      x[i] += speed[i];
      if(x[i] > (p.windowWidth - (diameter/2)) || x[i] < (0 + (diameter/2))){
        speed[i] = 0 - speed[i];
        console.log("Direction of " + i + " bubble changed.");
      }
      p.ellipse(x[i], y[i], diameter, diameter);
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  }
};
