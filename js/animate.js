var stateMgmt = require('./stateMgmt')
var drawCanvas = require('./drawCanvas')

sequence = [
  {from: 100, to: 50,  rate: 150},
  {from: 50,  to: 100, rate: 150},
  // {from: 50,  to: 50,  rate: 20},
  // {from: 100, to: 100, rate: 20},
]

function animateSequence() {

  nextCut = 0;
  animate(sequence[nextCut])

  function animate(cut){
    count = 1
    next = cut.from
    hold = false

    if (cut.from > cut.to) growOrShrink = 1
    else if (cut.from < cut.to) growOrShrink = -1
    else hold = true;

    if(hold) id = setTimeout(advanceCut, cut.rate)
    else id = setInterval(tween, cut.rate);

    function tween(){
      if (next == cut.to){
        clearInterval(id)
        count = 1
        advanceCut();
      } else {
        next = cut.from - (count*growOrShrink)
        state.offset = next;
        drawCanvasFromState();

        if(state.rotate) state.angle++;
        count++
      }
    }


    function advanceCut(){
      nextCut++
      if(sequence.length == nextCut) nextCut = 0
      animate(sequence[nextCut])
    }

  }
}

function play(){
  id = setInterval(function(){stateMgmt.inc('repeats', 1); drawCanvas.fromState()}, 300);
}

module.exports = {animateSequence, play}
