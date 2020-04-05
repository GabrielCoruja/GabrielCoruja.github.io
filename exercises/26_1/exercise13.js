db.clientes.aggregate([
  {
    $lookup: {
      from: 'vendas',
      localField: 'clienteId',
      foreignField: 'clienteId',
      as: 'pagamento'
    }
  },
  { $unwind: '$pagamento' },
  {$match: 
    {
      'pagamento.dataVenda': {
        $gte: ISODate('2019-01-01'),
        $lte: ISODate('2019-12-31')
      }
    }
  },
  { 
    $group: 
    { _id: '$endereco.uf', mediaVendas: 
      { $avg: { $sum: '$pagamento.valorTotal' } }, totalVendas: { $sum: 1 }
    }
  },
  {$sort: {_id: 1}}
]);
