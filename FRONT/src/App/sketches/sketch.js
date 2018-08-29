export default function sketch (p) {
  var diameter = 100;
  var speedx = [];
  var speedy = [];
  var direction = [];
  var x = [], y = [];
  var r = [], g = [], b = [];
  var speed = 1;
  var numberOfBubbles = 27;

  // Setup before draw
  // 1. Gets random color and sets
  // 2. Get random positions for each bubble
  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.frameRate(60);
    p.strokeWeight(2);

    for(var i = 0; i < numberOfBubbles; i++){
      r[i] = Math.random() * 255;
      g[i] = Math.random() * 255;
      b[i] = Math.random() * 255;
      x[i] = (Math.random() * p.windowWidth);
      y[i] = (Math.random() * p.windowHeight);
      direction[i] = Math.random() * 360;
      speedx[i] = (Math.random()*(speed + speed)) - speed;
      speedy[i] = Math.sqrt((speed * speed) - (speedx[i] * speedx[i]));
      if(Math.random() >= 0.50000){
        speedy[i] = 0 - speedy[i];
      }
      if((x[i] < (diameter/2)) || (x[i] > (p.windowWidth-(diameter/2)))) {
        i = i - 1;
      }else if((y[i] < (diameter/2)) || (y[i] > (p.windowHeight-(diameter/2)))) {
        i = i - 1;
      }
    }
  };

  // Draw runs in loop
  // 1. Clear canvas
  // 2. Draws each bubble
  p.draw = function() {
    p.clear();

    for(var i = 0; i < numberOfBubbles; i++){
      p.stroke(r[i], g[i], b[i]);
      p.fill(r[i], g[i], b[i], 127);
      x[i] += speedx[i];
      y[i] += speedy[i];
      if(y[i] > (p.windowHeight - (diameter/2)) || y[i] < (0 + (diameter/2))){
        r[i] = Math.random() * 255;
        g[i] = Math.random() * 255;
        b[i] = Math.random() * 255;
        speedy[i] = 0 - speedy[i];
        console.log("Direction of " + i + " bubble changed.");
      }
      if(x[i] > (p.windowWidth - (diameter/2)) || x[i] < (0 + (diameter/2))){
        r[i] = Math.random() * 255;
        g[i] = Math.random() * 255;
        b[i] = Math.random() * 255;
        speedx[i] = 0 - speedx[i];
        console.log("Direction of " + i + " bubble changed.");
      }
      p.ellipse(x[i], y[i], diameter, diameter);
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  }
};
