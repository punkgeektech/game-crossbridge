const dpi = window.devicePixelRatio;
const canvas = document.getElementById('canvas');
const context = canvas.getContext("2d");

// https://medium.com/wdstack/fixing-html5-2d-canvas-blur-8ebe27db07da
const style_height = +getComputedStyle(canvas).getPropertyValue("height").slice(0, -2);
const style_width = +getComputedStyle(canvas).getPropertyValue("width").slice(0, -2);
canvas.setAttribute('height', style_height * dpi);
canvas.setAttribute('width', style_width * dpi);

const HEIGHT = 300;
const X_POSITION = 100;
const Y_POSITION = 500;

let step = 0;
let degree = 0;

function init() {
  context.beginPath();
  drawRec();
  drawBall();
  context.stroke();
}

function drawBall() {
  context.fillRect(X_POSITION, Y_POSITION, 100, HEIGHT);
}

function drawRec() {
  context.arc(150, 475, 25, 0, 2 * Math.PI);
}

init()

function drawBridge(x, y) {
  context.clearRect(0,0,1200,800);
  context.beginPath();
  drawRec();
  drawBall();
  context.translate(200, Y_POSITION);
  context.moveTo(0, 0);
  context.lineTo(x, -100);
  context.stroke();
}

document.addEventListener("keydown", event => {
  if (event.keyCode === 32) {
    drawBridge(0, -step);
    step += 10;
    console.log(step);
  }
});

document.addEventListener("keyup", event => {
  if (event.keyCode === 32) {
    rotateBridge();
  }
});

function rotateBridge(degree) {
  var d = degree
  drawBridge(100 * Math.cos(d * Math.PI / 180), 100 * Math.sin(d * Math.PI / 180));
  setTimeout(function() {
    rotateBridge(d++);
  }, 100);
}
