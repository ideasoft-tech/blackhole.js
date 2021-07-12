
function PMonitor(node) {

    let pMonitor = {
        stepDate: 864e5
    };

    let bh = d3.blackHole(node)
    pMonitor.bh = bh

    bh.setting.drawTrack = true;

    bh.on('calcRightBound', function (l) {
        return +l + pMonitor.stepDate;
    })

    return pMonitor;
}

function initPMonitor(pMonitor, pView) {

    let bh = pMonitor.bh
    // pMonitor.stepDate = 1000
    //
     bh.setting.parentLife = 0;
    // bh.setting.rateOpacity = 1.0;
    // bh.setting.drawAsPlasma = true;
    // bh.setting.realtime = true;
    // bh.setting.asyncParsing = true;
    //
    // bh.setting.increaseChild = true;
    // bh.setting.increaseChildWhenCreated = true;
    // bh.setting.createNearParent = false;
    // bh.setting.speed = 500;
    // bh.setting.skipEmptyDate = true;
    // bh.setting.zoomAndDrag = true;
    bh.setting.drawParentLabel = true;
    // bh.setting.blendingLighter = true;
    // bh.setting.drawAsPlasma = true;
    bh.setting.drawParent = true;
    //
    // bh.setting.drawTrack = true;
    // bh.setting.drawHalo = true;
    // bh.setting.zoomAndDrag = false;
    // bh.setting.padding = 10;
    // bh.setting.rateFlash = 1;
    //
    // var counter = 0;

    bh.on('calcRightBound', function(l) {
        return +l + pMonitor.stepDate;
    }).on('getParent', function(d) {
        return d.to;
    }).on('getChildKey', function(d) {
        if (d.from === undefined) return d.key;
        else return d.from.key;
    }).on('getParentPosition', function(d) {
        let node = pView.nodes[d.name]
        if (node === undefined) return null;
        else return [node.x, node.y];
    }).on('getChildPosition', function(d) {
            if (d.from === undefined) {
                return null;
            } else {
                let node = pView.nodes[d.from.name]
                if (node === undefined) return null;
                else return [node.x, node.y];
            }
    }).on('getParentFixed', function(d) {
        let node = pView.nodes[d.name]
        if (node === undefined) return false
        else return node.fixed;
    });
    //     .on('getParentImage', function(d) {
    //     var r = new Image();
    //     r.src = d.img;
    //     return r;
    // }).on('getParentLabel', function(nodeParent) {
    //     return nodeParent.nodeValue.position == "above" ? nodeParent.nodeValue.name : "";
    // });

    return bh;
}
