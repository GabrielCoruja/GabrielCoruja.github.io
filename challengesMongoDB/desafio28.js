db.voos.deleteMany({$and: [{'empresa.nome': 'GOL'}, {'passageiros.pagos': {$gt: 5, $lt:10}} ]});
const quantidadeDeItensRemovidos = 43;

