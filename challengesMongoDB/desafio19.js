db.voos.find({'natureza': 'Doméstica'}).count();
// ou 
db.voos.find({'natureza': {$eq: 'Doméstica'}}).count();
