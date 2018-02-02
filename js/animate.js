var stateMgmt = require('./stateMgmt')
var drawCanvas = require('./drawCanvas')

scene1 = {from: 100, to: 50,   rate: 150}
scene2 = {from:  50, to: 100,  rate: 150}

sequence = [ scene1, scene2 ]

function animateSequence() {

  nextScene = 0;
  animate(sequence[nextScene])

  function animate(scene){
    count = 1
    next = scene.from
    hold = false

    if (scene.from > scene.to) growOrShrink = 1
    else if (scene.from < scene.to) growOrShrink = -1
    else hold = true;

    if(hold) id = setTimeout(advanceScene, scene.rate)
    else id = setInterval(tween, scene.rate);

    function tween(){
      if (next == scene.to){
        clearInterval(id)
        count = 1
        advanceScene();
      } else {
        next = scene.from - (count*growOrShrink)
        state.offset = next;
        drawCanvasFromState();

        if(state.rotate) state.angle++;
        count++
      }
    }


    function advanceScene(){
      nextScene++
      if(sequence.length == nextScene) nextScene = 0
      animate(sequence[nextScene])
    }

  }
}

function play(){
  id = setInterval(function(){stateMgmt.inc('repeats', 1); drawCanvas.fromState()}, 800);
}

module.exports = {animateSequence, play}
