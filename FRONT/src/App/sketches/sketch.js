export default function sketch (p) {
  var x = 100;
  var y = 100;
  var speed = 2;
  var r, g, b;

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.frameRate(60);
    r = Math.random() * 255;
    g = Math.random() * 255;
    b = Math.random() * 255;
  };

  p.draw = function() {
    p.clear();
    p.strokeWeight(2);
    p.stroke(r, g, b);
    p.fill(r, g, b, 127);
    x += speed;
    if(x > (p.width - 50) || x < (0 + 50)){
      speed = 0 - speed;
    }
    p.ellipse(x,y,100,100);
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  }
};
