var stateMgmt = require('./stateMgmt')

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var deg_to_rad = Math.PI / 180.0;
var rootX
var rootY

function setRoot(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  rootX = canvas.width / 2;
  rootY = canvas.height / 2;
}

function fromState(){
  state = stateMgmt.get();

  context.fillStyle = state.color;
  context.strokeStyle = state.color;
  context.globalAlpha = state.energy;
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.lineWidth = state.lineWidth;
  context.beginPath();
  treeIteration = 0;
  drawReflectedTrees(rootX, rootY, state.angle, state.yessss);
  context.closePath();
  context.stroke();
}

function drawReflectedTrees(x1, y1, angle, depth){
  while (state.repeat - treeIteration !== 0) {
    drawTree(x1, y1, angle, depth);
    treeIteration++;
  }
}

function drawTree(x1, y1, angle, depth){
  var mirrorAngle = treeIteration/state.repeat * (2 * Math.PI)
  if (depth !== 0){
    var x2 = x1 + (Math.cos(angle * deg_to_rad + mirrorAngle) * depth * state.tensor);
    var y2 = y1 + (Math.sin(angle * deg_to_rad + mirrorAngle) * depth * state.tensor);
    drawLine(x1, y1, x2, y2, depth);
    drawTree(x2, y2, (angle + state.widthh + state.quirkk), depth - 1);
    drawTree(x2, y2, (angle - state.widthh), depth - 1);
  }
}

function drawLine(x1, y1, x2, y2){
  context.moveTo(x1, y1);
  if(state.toggleStroke){context.lineTo(x2, y2);}
  else{
    pointSize = state.pointSize
    context.fillRect(x2 - pointSize/2, y2 - pointSize/2, pointSize, pointSize)
  }
}


module.exports = {
  setRoot, fromState
}