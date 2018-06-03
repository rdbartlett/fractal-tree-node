var animate = require('./animate')
var presets = require('./presets')

var i = 0;

function hide(){
  parent = document.getElementById('slides')
  Array.prototype.forEach.call(parent.children, child => {
    child.style.display = 'none'
  })
}

function show(index){
  hide()
  i = index
  if(d = document.getElementById('slide-' + index))
    d.style.display = 'block'

  switch(index){
    case 2:
      animate.pause()
      break
    case 3:
      presets.load(10)
      break
    case 4:
      presets.load(11)
      break
    case 5:
      presets.load(12)
      break
    case 6:
      presets.load(13)
      break
    case 9:
      presets.load(14)
      break
    case 10:
      presets.load(15)
      break
    case 11:
      presets.load(16)
      break
    case 12:
      document.getElementById("tutorialState").style.display = "none"
      presets.load(17)
      break
    case 13:
      document.getElementById("tutorialState").style.display = "block"
      presets.load(18)
      break

  }

}

function next(){
  i++
  show(i)
}

function prev(){
  i--
  show(i)
}

module.exports = {show, next, prev}