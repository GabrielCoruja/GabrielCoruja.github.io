db.nycFacilities.aggregate([
  {
    $group: {
      _id: '$type', total: {$sum: 1}
    }
  },
  {$sort: {total: 1}}
]);
