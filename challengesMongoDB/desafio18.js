db.voos.find({'natureza': 'Internacional'}).count(); 
// ou 
db.voos.find({'natureza': {$eq: 'Internacional'}}).count();
