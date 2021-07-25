use videoStore

db.movies.insertMany([{title:"Vissza a jövőbe",category:"action",director:"Steven Spielberg"},{title:"Sugarlandi hajtóvadászat",category:"action",director:"Steven Spielberg"},{title:"E.T.",category:"fantasy"},{title:"A nap birodalma",category:"romantic",director:"Steven Spielberg"},{title:"A Jó, a Rossz és a Csúf",category:"action",director:"Clint Eastwood"},{title:"Gran Torino",category:"action",director:"Clint Eastwood"},{title:"Piszkos Harry",category:"action",director:"Clint Eastwood"},{title:"Terminátor",category:"fantasy",director:"James Cameron"},{title:"Rambo 2",category:"action",director:"James Cameron"},{title: "A bolygó neve: Halál (Aliens)",category:"fantasy",director:"James Cameron"}])

db.movies.updateMany({}, {$set: {ratings: []}})

db.movies.updateOne({title: "E.T."}, {$push: {ratings: 5} }) 
db.movies.updateOne({title: "E.T."}, {$push: {ratings: 3} })
db.movies.updateOne({title: "Terminator"}, {$push: {ratings: 4} })
db.movies.updateOne({title: "Terminator"}, {$push: {ratings: 2} })
db.movies.updateOne({title: "Sugarlandi hajtóvadászat"}, {$push: {ratings: 4} })
db.movies.updateOne({title: "Sugarlandi hajtóvadászat"}, {$push: {ratings: 3} })

db.movies.updateMany({}, {$set: { releaseYear: 2000 }} )

db.movies.find().forEach( function(item) { db.movies.update( {"\_id": item.\_id}, {"$set": {"category": item.category.toUpperCase() }})})
