db.clientes.aggregate([
  {
    $lookup: {
      from: 'vendas',
      localField: 'clienteId',
      foreignField: 'clienteId',
      as: 'pagamento'
    }
  },
  { $group: { _id: { id: '$clienteId', nome: '$nome' }, total: { $sum: { $sum: '$pagamento.valorTotal' } } } },
  { $sort: { total: -1 } },
  { $limit: 5 },
  { $project: { nome: '$_id.nome', total: 1, _id: 0 } }
]);
