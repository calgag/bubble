/*
Adapted from the Processing code found at https://processing.org/examples/bouncybubbles.html
and based on Keith Peter's Solution in Foundation Actionscript Animation: Making Things Move!
*/
export default function sketch(p) {
  var spring = .1;
  var balls = [];
  var numBalls, diameters, rgb;

  p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    numBalls = props.numBalls;
    diameters = props.diameters;
    rgb = props.rgb;
    console.log("Starting drawing...");
    console.log("==== Colors ====\nR: " + rgb[0] + "\nG: " + rgb[1] + "\nB: " + rgb[2]);
    console.log("==== NumBalls ====\nNumBalls: " + numBalls);
  }

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  }

  p.setup = function() {
    p.createCanvas(p.windowWidth, p.windowHeight);
    for (var i = 0; i < numBalls; i++) {
      balls[i] = new Ball(Math.random()*p.width, Math.random()*p.height, diameters[i], i, balls);
    }
    p.noStroke();
    p.fill(rgb[0], rgb[1], rgb[2]);
    // noLoop();
  }

  p.draw = function() {
    p.clear();
    for (var i = 0; i < balls.length; i++) {
      balls[i].collide();
      balls[i].move();
      balls[i].display();
    }
  }


  function Ball(xin, yin, din, idin, oin) {
    this.x = xin;
    this.y = yin;
    this.diameter = din;
    this.id = idin;
    this.others = oin;

    this.vx = 5;
    this.vy = 5;

    this.collide = function() {
      for (var i = this.id + 1; i < numBalls; i++) {
        var dx = this.others[i].x - this.x;
        var dy = this.others[i].y - this.y;
        var distance = Math.sqrt(dx * dx + dy * dy);
        var minDist = this.others[i].diameter / 2 + this.diameter / 2;

        if (distance < minDist) {
          var angle = Math.atan2(dy, dx);
          var targetX = this.x + Math.cos(angle) * minDist;
          var targetY = this.y + Math.sin(angle) * minDist;
          var ax = (targetX - this.others[i].x) * spring;
          var ay = (targetY - this.others[i].y) * spring;
          this.vx -= ax;
          this.vy -= ay;
          this.others[i].vx += ax;
          this.others[i].vy += ay;
        }
      }
    }

    this.move = function() {
      this.x += this.vx * .01;
      this.y += this.vy * .01;
      if (this.x + this.diameter / 2 > p.width) {
        this.x = p.width - this.diameter / 2;
        this.vx = 0 - this.vx;
      } else if (this.x - this.diameter / 2 < 0) {
        this.x = this.diameter / 2;
        this.vx = 0 - this.vx;
      }
      if (this.y + this.diameter / 2 > p.height) {
        this.y = p.height - this.diameter / 2;
        this.vy = 0 - this.vy;
      } else if (this.y - this.diameter / 2 < 0) {
        this.y = this.diameter / 2;
        this.vy = 0 - this.vy;
      }
    }

    this.display = function() {
      p.ellipse(this.x, this.y, this.diameter, this.diameter);
    }
  }
}
