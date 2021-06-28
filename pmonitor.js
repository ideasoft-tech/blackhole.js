
function PMonitor(node) {

    let pMonitor = {
        stepDate: 864e5
    };

    let d3bh = d3.blackHole(node)
    pMonitor.d3bh = d3bh

    d3bh.setting.drawTrack = true;

    d3bh.on('calcRightBound', function (l) {
        return +l + pMonitor.stepDate;
    })

    return pMonitor;
}
