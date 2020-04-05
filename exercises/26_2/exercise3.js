db.clientes.aggregate([
  {$addFields:
    {idade: 
      {$floor: 
        {$divide: 
          [{ $subtract: ['$$NOW', '$dataNascimento']}, 86400000*365]
        }
      }
    }
  },
  {$match: {idade: {$gte: 18, $lte: 25}}},
  {$lookup: 
    {from: 'vendas',
    localField: 'clienteId',
    foreignField: 'clienteId',
    as: 'compras'
  }},
  { $limit: 1 }
]).pretty();
