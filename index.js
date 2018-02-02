var stateMgmt = require('./js/stateMgmt')
stateMgmt.init();

var drawCanvas = require('./js/drawCanvas')
drawCanvas.setRoot();
// drawCanvas.fromState();

window.addEventListener('resize', function() {
  drawCanvas.setRoot()
  drawCanvas.fromState();
});

var animate = require('./js/animate')

animate.startSequence();
