db.clientes.aggregate([
  {
    $lookup: {
      from: 'vendas',
      localField: 'clienteId',
      foreignField: 'clienteId',
      as: 'compras'
    }
  },
  { $unwind: '$compras' },
  {
    $match:
    {
      'compras.dataVenda':
      {
        $gte: ISODate('2020-03-01'),
        $lte: ISODate('2020-03-31')
      },
      'compras.status': 'EM SEPARACAO'
    }
  },
  { $set: { dataEntregaPrevista: { $add: ['$compras.dataVenda', 86400000 * 3] } } },
  { $project: { _id: 0, clienteId: 1, 'compras.dataVenda': 1, dataEntregaPrevista: 1 } },
  {
    $addFields: {
      diasParaEntrega: {
        $abs: {
          $subtract:
            [{ $dayOfMonth: '$compras.dataVenda' }, { $dayOfMonth: '$dataEntregaPrevista' }]
        }
      }
    }
  },
  {$sort: {'compras.dataVenda': -1}}
]);
