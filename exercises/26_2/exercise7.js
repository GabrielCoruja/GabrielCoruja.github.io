// somatorio total de todos os itens comprados para um mesmo cliente adicionando desconto
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
  {$limit: 10},
  {$unwind: '$compras'},
  {$group: {_id: {id:'$clienteId', name: '$nome', tot: '$total'}, valTotal: {$sum: '$compras.valorTotal'} }},
  {$project: {_id: 0, nome: '$_id.name', valorTotal: '$_id.tot', value: {$multiply: ['$valTotal', 0.9]}}},
  {$sort: {valorTotal: -1}},
]);

// adição de desconto para todas as compras feitas 
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
  {$limit: 10},
  {$unwind: '$compras'},
  {$set: {'compras.valorComDesconto': {$multiply: ['$compras.valorTotal', 0.9]}}}
]);
