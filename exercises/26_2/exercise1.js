db.clientes.aggregate([
  {
    $addFields:
    {
      idade: {
        $floor: {
          $divide: [
            { $subtract: ['$$NOW', '$dataNascimento'] }, 86400000*365
          ]
        }
      }
    }
  },
  { $limit: 1 }
]).pretty();
