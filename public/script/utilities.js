//random integer
//remove from array
function S4() {
    return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
}

 function getGUID() {
  // then to call it, plus stitch in '4' in the third group
  return (S4() + S4() + "-" + S4() + "-4" + S4().substr(0,3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();
}

function clone(arr) {
  var clone = [];
  arr.forEach(function(element, index) {
    clone.push(element);
  })
  return clone;
}
