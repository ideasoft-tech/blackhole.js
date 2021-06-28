

var eventList = `[{
    "key": 1,
    "category": "CatA,",
    "parent": {
      "name": "Node0",
      "key": 0
    },
    "date": "2021-01-01T00:00:00.000Z"
  },
  {
    "key": 2,
    "category": "CatA,",
    "parent": {
      "name": "Node0",
      "key": 0
    },
    "date": "2021-01-01T00:00:00.000Z"
  },
  {
    "key": 2,
    "category": "CatA,",
    "parent": {
      "name": "Node1",
      "key": 1
    },
    "date": "2021-01-02T00:00:00.000Z"
  }]`

var rawData = JSON.parse(eventList)

var data = rawData.map(function (d) {
        d.date = new Date(d.date);
        return d;
    })
;