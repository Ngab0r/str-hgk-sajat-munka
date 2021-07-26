use videoStore

db.movies.find({ $or: [ { category: "ACTION" }, { category: "ROMANTIC" }] }).count()

var fantasy = db.movies.find( { category: "FANTASY" }, {title: 1, category: 1, \_id: 0})

fantasy.forEach(function(item){print(item.title+" "+item.category)})

db.movies.find({}, { \_id: 0, title: 1 }).sort({ \_id: -1})

db.movies.find({} , { \_id: 0, title: 1, category: 1, releaseYear: 1 }).sort({ category: 1, releaseYear: -1 })

db.movies.find({ category: "ACTION"}).sort({ releaseYear: -1 }).limit(1)

db.movies.find({}, { \_id: 0, title: 1, releaseYear: 1 }).sort({releaseYear: 1}).limit(2)

db.movies.find({category: "ROMANTIC"}, { \_id: 0, title: 1, releaseYear: -1 }).skip(1).limit(1)
