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
  {$lookup: 
    {from: 'vendas',
    localField: 'clienteId',
    foreignField: 'clienteId',
    as: 'compras'
  }},
  {$match: {'compras.dataVenda': {$gte: ISODate('2019-06-01'), $lte: ISODate('2020-03-31')}}},
  {$set: {total: {$size: '$compras'}}},
  {$sort: {total: -1}},
  {$limit: 1}
]).pretty();

