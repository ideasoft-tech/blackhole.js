let d = new Date("2021-01-01T10:00:00")

function ProcessView() {
    let processView = {
        name: "MainView"
    };

    (function () {
        processView.nodes = new Map()
    })();

    processView.load = function(jsonNodes) {
        jsonNodes.forEach(function (n) {
            processView.nodes[n.name] = n;
        });
    };

    return processView;
}

let pView = new ProcessView

let rawNodes = `[
    {
      "name": "Node0",
      "x": 50,
      "y": 50,
      "fixed": true
    },
    {
      "name": "Node1",
      "x": 200,
      "y": 100,
      "fixed": true
    },
    {
      "name": "Node2",
      "x": 350,
      "y": 150,
      "fixed": true
    },
    {
      "name": "Node3",
      "x": 500,
      "y": 200,
      "fixed": true
    },
        {
      "name": "Node4",
      "x": 650,
      "y": 250,
      "fixed": true
    }



  ]`

let jsonNodes = JSON.parse(rawNodes)

pView.load(jsonNodes)

console.log(d.toString())

console.log(pView.nodes)