var stateMgmt = require('./stateMgmt')
var rangesMgmt = require('./rangesMgmt')

var presets = [
    {repeat: 1,  yessss: 7,  widthh: 19,  tensor: 12, quirkk: 7,   energy: 100}
  , {repeat: 2,  yessss: 9,  widthh: 44,  tensor: 6,  quirkk: -26, energy: 100}
  , {repeat: 6,  yessss: 14, widthh: 60,  tensor: 20, quirkk: 0,   energy: 15}
  , {repeat: 5,  yessss: 9,  widthh: 180, tensor: 20, quirkk: -60, energy: 25}
  , {repeat: 6,  yessss: 9,  widthh: 60,  tensor: 8,  quirkk: 0,   energy: 60}
  , {repeat: 16, yessss: 13, widthh: 60,  tensor: 13, quirkk: 0,   energy: 20}
  , {repeat: 3,  yessss: 7,  widthh: 6,   tensor: 4,  quirkk: -90, energy: 80}
  , {repeat: 4,  yessss: 10, widthh: 45,  tensor: 8,  quirkk: 90,  energy: 40}
  , {repeat: 7,  yessss: 11, widthh: 90,  tensor: 13, quirkk: 0,   energy: 50}
  , {repeat: 9,  yessss: 9,  widthh: 30,  tensor: 10, quirkk: 0,   energy: 100}
]

function load(index){
  var newState = presets[index]
  rangesMgmt.set('quirkk', 'center', newState.quirkk)
  rangesMgmt.set('widthh', 'center', newState.widthh)
  rangesMgmt.set('energy', 'center', newState.energy)
  rangesMgmt.set('repeat', 'center', newState.repeat)
  rangesMgmt.set('tensor', 'center', newState.tensor)
  rangesMgmt.set('yessss', 'center', newState.yessss)
  stateMgmt.set('quirkk', newState.quirkk)
  stateMgmt.set('widthh', newState.widthh)
  stateMgmt.set('energy', newState.energy)
  stateMgmt.set('repeat', newState.repeat)
  stateMgmt.set('tensor', newState.tensor)
  stateMgmt.set('yessss', newState.yessss)
}

module.exports = { presets, load }