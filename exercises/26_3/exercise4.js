db.nycFacilities.aggregate([
  {
    $geoNear: {
      near: {
        type: 'Point',
        coordinates: [-73.9926234, 40.7584905]
      },
      distanceField: "distanceFromAeroport",
      spherical: true
    }
  },
  {$set: {
    kmDistance: {
      $trunc: [{$divide: ['$distanceFromAeroport', 1000]}, 2]
    }
  }},
  {$sort: {'distanceFromAeroport': 1}},
  {$limit: 20}
]).pretty();
