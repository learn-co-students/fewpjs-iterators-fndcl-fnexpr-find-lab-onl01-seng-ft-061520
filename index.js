const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin(record){
  let win = record.find(function(obj){
    return obj.result === "W";
  })
  if(win){
    return win.year;
  }
}
