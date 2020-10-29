const testVar = {}

function testFunc() {
    return "hi"
}


function superbowlWin(rec) {
    rec.find(function(i) {
        if (i.result === "W") {
            return i.year
        } else {
            return undefined
        }
    })
}