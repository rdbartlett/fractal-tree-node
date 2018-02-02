var ranges = {}

function init(){
  ranges = {
    quirkk: {low: 0,  high: 2,   period: 10},
    widthh: {low:  30,  high: 60,   period: 0}
  }
  return ranges
}

function get(){
  return ranges
}

function inc(attr, by){
  // TODO add bounds

  ranges[attr].high += by

}


module.exports = { init, get, inc }
