db.nycFacilities.aggregate([
  {
    $facet: {
      'vision1': [
        {$group: {_id: '$type', total: {$sum: 1}}},
        {$sort: {_id: 1}}
      ],
      'vision2': [
        {$group: {_id: {type: '$type', borough: '$borough'}, total: {$sum: 1}}},
        {$sort: {_id: 1, total: -1}}
      ]
    }
  },
]).pretty();
