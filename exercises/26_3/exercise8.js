db.nycFacilities.aggregate([
  {
    $geoNear: {
      near: {
        type: 'Point',
        coordinates: [-73.9926234, 40.7584905]
      },
      maxDistance: 800,
      distanceField: 'distanceFromParksMuseuns',
      spherical: true,
      query: {type: {$in: ['Park', 'Museum']}}
    }
  }
]).pretty();

db.nycFacilities.aggregate([
  {
    $geoNear: {
      near: {
        type: 'Point',
        coordinates: [-73.9926234, 40.7584905]
      },
      maxDistance: 800,
      distanceField: 'distanceFromParksMuseuns',
      spherical: true,
      query: {type: {$in: ['Park', 'Museum']}}
    }
  },
  {
    $facet: {
      parks: [
        {$match: {type: 'Park'}}
      ],
      museum: [
        {$match: {type: 'Museum'}}
      ]
    }
  }
]);
