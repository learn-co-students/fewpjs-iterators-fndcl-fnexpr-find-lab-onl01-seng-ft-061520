const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(superbowls){
    let result = superbowls.find( (superbowl) => { return superbowl.result === "W"} )
    if(!!result){
	return result.year;
    }else{
	return undefined;
    }
}
