db.clientes.aggregate([
  {
    $lookup: {
      from: 'vendas',
      localField: 'clienteId',
      foreignField: 'clienteId',
      as: 'pagamento'
    }
  },
  {$unwind: '$pagamento'},
  {
    $match: {
      'pagamento.dataVenda': {
        $gte: ISODate("2019-01-01"),
        $lte: ISODate("2019-12-31")
      }
    }
  },
  { $group: { _id: { id: '$clienteId', nome: '$nome' }, total: { $sum: { $sum: '$pagamento.valorTotal' } } } },
  { $sort: { 'pagamento.dataVenda': -1 } },
  { $limit: 5 },
]).pretty();

