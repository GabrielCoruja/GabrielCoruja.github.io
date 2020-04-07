db.nycFacilities.aggregate([
  {
    $geoNear: {
      near: {
        type: 'Point',
        coordinates: [-73.9926234, 40.7584905]
      },
      maxDistance: 5000,
      distanceField: 'distanceFromAeroport',
      spherical: true
    }
  },
  {
    $bucket: {
      groupBy: '$distanceFromAeroport',
      boundaries: [0, 1000, 2000, 3000, 4000, 5000],
      default: 'Other',
      output: {
        count: {$sum: 1},
        hospitals: {
          $push: {
            street: '$address.street',
            number: '$address.number',
            city: '$address.city',
            zipcode: '$address.zipcode'
          }
        }
      }
    }
  },
]);
