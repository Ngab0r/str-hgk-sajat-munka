db.directors.insertOne({\_id:1,name: "Steven Spielberg",birthYear: 1946,movies: []})
db.directors.insertOne({\_id:2,name: "Clint Eastwood",birthYear: 1930,movies: []})
db.directors.insertOne({\_id:3,name: "James Cameron",birthYear: 1954,movies: []})

db.directors.update({name:"Steven Spielberg"},{$set: {movies: db.movies.find({director:"Steven Spielberg"},{_id:1}).toArray().map( function(u) { return u._id; })}})
db.directors.update({name:"Clint Eastwood"},{$set: {movies: db.movies.find({director:"Clint Eastwood"},{\_id:1}).toArray().map( function(u) { return u.\_id; })}})
db.directors.update({name:"James Cameron"},{$set: {movies: db.movies.find({director:"James Cameron"},{\_id:1}).toArray().map( function(u) { return u.\_id; })}})

Vagy:
db.directors.find().forEach(function(directorsCollection){db.directors.update({name:directorsCollection.name},{$set: {movies: db.movies.find({director:directorsCollection.name},{\_id:1}).toArray().map( function(u) { return u.\_id; })}});})

db.directors.find().pretty()

db.movies.updateMany({}, {$unset: {director: ""}})

db.movies.find({ releaseYear: { $gt: 1995 } })

db.movies.find({ releaseYear:{ $lte: 2020 } })

db.movies.find({ $and: [ { releaseYear: { $gt: 1995 }}, {releaseYear: { $lt: 2020 }} ]})

db.movies.find({ category: "ACTION", $and: [ { releaseYear: { $gt: 1995 }}, {releaseYear: { $lt: 2020 }} ]})

db.movies.find( { category: { $ne: "FANTASY" } } )
