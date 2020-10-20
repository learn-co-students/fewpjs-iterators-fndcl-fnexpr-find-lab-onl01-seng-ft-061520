const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record){
  let win = record.find(r => r.result === "W");
  console.log(win);
  if(win !== undefined){
    return win.year;
  }
  else{
    return undefined
  };
}
