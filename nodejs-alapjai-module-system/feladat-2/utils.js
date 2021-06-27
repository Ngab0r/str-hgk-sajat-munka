const increaseDate = (date, days) => new Date(date.setDate(date.getDate() + days))
exports.increaseAndFormatDate = (arr) => arr.map(item => increaseDate(item, 3).toLocaleDateString('hu'))
