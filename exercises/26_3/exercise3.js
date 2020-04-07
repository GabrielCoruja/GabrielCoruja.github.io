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
  {$sort: {'distanceFromAeroport': 1}},
  {$limit: 20}
]).pretty();
