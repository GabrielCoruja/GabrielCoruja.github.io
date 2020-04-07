db.nycFacilities.aggregate([
  {
    $facet: {
      parks: [
        {$group: {_id: {type: '$type', borough: '$borough'}, total: {$sum: 1}}},
        {$sort: {total: -1}}
      ],
      museuns: [
        {$group: {_id: {type: '$type', borough: '$borough'}, total: {$sum: 1}}},
        {$sort: {total: -1}}
      ]
    }
  },
  {$limit: 1}
]).pretty();
