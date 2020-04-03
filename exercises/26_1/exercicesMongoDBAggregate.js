1) db.clientes.aggregate([{$match: {sexo: 'MASCULINO'}}]);

2) db.clientes.aggregate({ 
  $match: { sexo: "FEMININO", 
    dataNascimento: { 
      $gte: new ISODate("1995-01-01"),
      $lte: new ISODate("2005-11-31")
    }
  }
});

3) db.clientes.aggregate({ 
    $match: { sexo: "FEMININO", 
      dataNascimento: { 
        $gte: new ISODate("1995-01-01"),
        $lte: new ISODate("2005-12-31")
      }
    } 
  },
  {$limit: 5}
);

4) db.clientes.aggregate([ 
    {$match: {'endereco.uf': 'SC'}},
    {$group: {_id:'$endereco.uf', total: {$sum: 1}}} 
  ]);

5) db.clientes.aggregate([
    {$group: {_id: '$sexo', total: {$sum: 1}}}
  ]);

6) db.clientes.aggregate([ {
    $group: {_id:{sexo: '$sexo',uf: '$endereco.uf'}, total: {$sum: 1}} } 
  ]);

7) db.clientes.aggregate([ 
    {$group: {_id:{sexo: '$sexo',uf: '$endereco.uf'}, total: {$sum: 1}} }, 
    {$project: {_id: 0, estado: '$_id.uf', sexo:'$_id.sexo',total: 1}} 
  ]);

8)
db.clientes.aggregate([
  {$lookup: {
      from: 'vendas',
      localField: 'clienteId',     
      foreignField: 'clienteId',
      as: 'pagamento'
  }},
  {$group: {_id:{id: '$clienteId', nome: '$nome'}, total: {$sum: {$sum:'$pagamento.valorTotal'}}}},
  {$sort: {total: -1}},
  {$limit: 5},
  {$project: {nome: '$_id.nome', total: 1, _id: 0}}
]);

// db.survey.aggregate([{$group: {_id:'$results.product', total:{$sum: {$sum: '$results.score'}}}}])

9) 
db.clientes.aggregate([
  {$lookup: {
    from: 'vendas',
    localField: 'clienteId',     
    foreignField: 'clienteId',      //incompleto
    as: 'pagamento'
  }},
  {$match: {
    'pagamento.dataVenda': {
      $gte: new ISODate("2019-01-01"), 
      $lte: new ISODate("2019-12-31") 
    }
  }},
  {$group: {_id:{id: '$clienteId', nome: '$nome'}, total: {$sum: {$sum:'$pagamento.valorTotal'}}}},
  {$sort: {total: -1}},
  {$limit: 10},
  {$project: {nome: '$_id.nome', total: 1, _id: 0}} 
]);

10) 
