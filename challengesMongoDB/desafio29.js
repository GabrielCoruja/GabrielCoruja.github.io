db.voos.find({$and: [{'empresa.nome': 'GOL'}, {'natureza': 'Doméstica'}]}).count();
db.resumoVoos.insertOne({'empresa': 'GOL', 'totalVoosDomesticos': 25828});
show collections;
db.resumoVoos.find().pretty();
