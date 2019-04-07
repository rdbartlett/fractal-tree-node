const url = require('url');
const querystring = require('querystring');
var stateMgmt = require('./stateMgmt')
var state = stateMgmt.get()
var drawCanvas = require('./drawCanvas')


// Todo: If params are set, collapse tutorial. Leave a help link somewhere.


// quirkk=0&widthh=180&energy=30&repeat=16&tensor=13&yessss=10&points=false&orbitt=false&urgncy=2&red=255&green=255&blue=255

function Bool(a){
  // funny function to treat a string from GET params like a boolean.
  return (String(a) == "true")
}

function drawCanvasFromURL(){
  var parsedUrl = url.parse(window.location.href);
  var parsedQs = querystring.parse(parsedUrl.query);

  console.log(parsedQs)

  for (prop in parsedQs) {
    val = parsedQs[prop]
    if(prop == 'points' || prop == 'orbitt'){
      stateMgmt.set(prop, Bool(val))
    }
    else{
      stateMgmt.set(prop, Number(val))
    }

  }
  drawCanvas.fromState()

}

module.exports = {drawCanvasFromURL}