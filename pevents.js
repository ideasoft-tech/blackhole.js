

var eventList = `[
  {
    "key": 101,
    "category": "CatA,",
    "to": {
      "name": "Node1",
      "key": 1
    },
    "from": {
      "name": "Node0",
      "key": 0
    },
     "date": "2021-01-01T00:00:00.000Z"
  },

  {
    "key": 102,
    "category": "CatA,",
    "to": {
      "name": "Node2",
      "key": 2
    },
    "from": {
      "name": "Node1",
      "key": 1
    },
    "date": "2021-01-02T00:00:00.000Z"
  },
  
    {
    "key": 103,
    "category": "CatA,",
    "to": {
      "name": "Node4",
      "key": 4
    },
    "from": {
      "name": "Node1",
      "key": 1
    },
    "date": "2021-01-02T00:00:00.000Z"
  },

  
  {
    "key": 104,
    "category": "CatA,",
    "to": {
      "name": "Node3",
      "key": 3
    },
    "from": {
      "name": "Node2",
      "key": 2
    },
    "date": "2021-01-03T00:00:00.000Z"
  },
  {
    "key": 104,
    "category": "CatA,",
    "to": {
      "name": "Node4",
      "key": 4
    },
    "from": {
      "name": "Node3",
      "key": 3
    },
    "date": "2021-01-04T00:00:00.000Z"
  }

  ]`

var rawData = JSON.parse(eventList)

var data = rawData.map(function (d) {
        d.date = new Date(d.date);
        return d;
    })
;