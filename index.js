var stateMgmt = require('./js/stateMgmt')
stateMgmt.init();

var rangesMgmt = require('./js/rangesMgmt')
rangesMgmt.init();

var ui = require('./js/ui')

var drawCanvas = require('./js/drawCanvas')
drawCanvas.setRoot();
drawCanvas.fromState();
window.addEventListener('resize', function() {
  drawCanvas.setRoot()
  drawCanvas.fromState();
});

var presets = require('./js/presets')
var keys = require('./js/keys')
var animate = require('./js/animate')

animate.sweep();

var slides = require('./js/slides')
slides.show(1)
