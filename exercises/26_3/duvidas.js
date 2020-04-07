// O $sortByCount cria uma chave com o nome 'count' por dafault? Se sim, tem como alterar o nome da chave?

// Pensando em um elemento de outra collection, o 
// from referencia a outra collection e os dois campos de connect são baseados neste elemento do from ?


// conferir o porque este método não funciona;
db.nycFacilities.aggregate([
  {
    $facet: {
      parks: [
        {
          $geoNear: {
            near: {
              type: 'Point',
              coordinates: [-73.9926234, 40.7584905]
            },
            maxDistance: 800,
            distanceField: 'distanceFromParks',
            spherical: true,
            query: {type: 'Park'}
          }
        }
      ],
      museum: [
        {
          $geoNear: {
            near: {
              type: 'Point',
              coordinates: [-73.9926234, 40.7584905]
            },
            maxDistance: 800,
            distanceField: 'distanceFromMuseuns',
            spherical: true,
            query: {type: 'Museum'}
          }
        }
      ]
    }
  }
]).pretty();
