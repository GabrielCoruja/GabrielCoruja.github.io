db.clientes.aggregate([
  {$lookup: {
    from: 'vendas',
    localField: 'clienteId',
    foreignField: 'clienteId',
    as: 'compras'
  }},
  {$unwind: '$compras'},
  {$match: {'compras.itens.nome': 'QUEIJO PRATO'}},
  {$group: {_id: {nome: '$nome', uf: '$endereco.uf'}, totalConsumido: {$sum: 1}}},
  {$sort: {totalConsumido: -1}},
  {$project: {_id: 0, nome:'$_id.nome', uf:'$_id.uf', totalConsumido: 1 }},
]).pretty();
