db.vendas.aggregate([
  { $group: { _id: '$clienteId', total: { $sum: 1 } } },
  { $match: { total: { $gt: 5 } } },
  { $count: 'clientes' }
]);
