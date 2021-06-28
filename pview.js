let d = new Date("2021-01-01T10:00:00")

function ProcessDef() {
    let sView = {
        name: "MainView"
    };

    (function () {
        sView.nodes = new Map()
    })();

    sView.load = function(jsonNodes) {
        jsonNodes.forEach(function (n) {
            sView.nodes[n.name] = n;
        });
    };

    return sView;
}

let pd = new ProcessDef

let rawNodes = `[{
      "name": "A",
      "x": 20,
      "y": 25
    }]`

let jsonNodes = JSON.parse(rawNodes)

pd.load(jsonNodes)

console.log(d.toString())

console.log(pd.nodes)