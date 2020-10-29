const testVar = {}

function testFunc() {
    return "hi"
}


function superbowlWin(rec) {
    const h = rec.find(function(i) {
        return i.result === "W"
    })
    if (h) {
        return h.year
    }


}