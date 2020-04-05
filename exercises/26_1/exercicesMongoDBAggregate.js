1) db.clientes.aggregate([{ $match: { sexo: 'MASCULINO' } }]);

2) db.clientes.aggregate({
  $match: {
    sexo: "FEMININO",
    dataNascimento: {
      $gte: ISODate("1995-01-01"),
      $lte: ISODate("2005-11-31")
    }
  }
});

3) db.clientes.aggregate({
  $match: {
    sexo: "FEMININO",
    dataNascimento: {
      $gte: ISODate("1995-01-01"),
      $lte: ISODate("2005-12-31")
    }
  }
},
  { $limit: 5 }
);

4) db.clientes.aggregate([
  { $match: { 'endereco.uf': 'SC' } },
  { $group: { _id: '$endereco.uf', total: { $sum: 1 } } }
]);

5) db.clientes.aggregate([
  { $group: { _id: '$sexo', total: { $sum: 1 } } }
]);

6) db.clientes.aggregate([{
  $group: { _id: { sexo: '$sexo', uf: '$endereco.uf' }, total: { $sum: 1 } }
}
]);

7) db.clientes.aggregate([
  { $group: { _id: { sexo: '$sexo', uf: '$endereco.uf' }, total: { $sum: 1 } } },
  { $project: { _id: 0, estado: '$_id.uf', sexo: '$_id.sexo', total: 1 } }
]);

8)
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

// db.survey.aggregate([{$group: {_id:'$results.product', total:{$sum: {$sum: '$results.score'}}}}])

9) // como colocar no pagameto os itens que tem apenas a data estipulada (2019);
db.clientes.aggregate([
  {
    $lookup: {
      from: 'vendas',
      pipeline: [
        {
          $match: {
            dataVenda: {
              $gte: ISODate("2019-01-01"),
              $lte: ISODate("2019-12-31")
            }
          }
        }
      ],
      as: 'pagamento'
    }
  },
  { $group: { _id: { id: '$clienteId', nome: '$nome' }, total: { $sum: { $sum: '$pagamento.valorTotal' } } } },
  { $sort: { total: -1 } },
  { $limit: 1 },
  { $project: { nome: '$_id.nome', total: 1, _id: 0 } }
]).pretty();

10)
db.vendas.aggregate([
  { $group: { _id: '$clienteId', total: { $sum: 1 } } },
  { $match: { total: { $gt: 5 } } },
  { $count: 'clientes' }
]);

11)
db.vendas.aggregate([
  {
    $match: {
      dataVenda: {
        $gte: ISODate('2020-01-01'),
        $lte: ISODate('2020-03-31')
      }
    }
  },
  { $group: { _id: '$clienteId', total: { $sum: 1 } } },
  { $match: { total: { $gte: 3 } } },
  { $count: 'clientes' }
]);

12)
db.vendas.aggregate([
  { $match: { dataVenda: { $gte: ISODate("2020-01-01") } } },
  {
    $lookup: {
      from: "clientes",
      localField: "clienteId",
      foreignField: "clienteId",
      as: "vendas_docs"
    }
  },
  { $unwind: "$vendas_docs" },
  {
    $group: {
      _id: "$vendas_docs.endereco.uf",
      totalVendas: {
        $sum: 1
      }
    }
  },
  {
    $sort: {
      totalVendas: -1
    }
  },
  {$limit: 3},
  {$project: {_id: 0, uf: '$_id', totalVendas: 1}}
]); 

13) 
