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
  {$match: {'compras.dataVenda': {$gte: ISODate('2019-03-01'), $lte: ISODate('2019-06-30')}}}
]).itcount();
