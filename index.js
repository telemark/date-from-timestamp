const datePadding = require('./lib/date-padding')

module.exports = (timestamp) => {
  const date = new Date(parseInt(timestamp, 10))
  const day = datePadding(date.getDate())
  const month = datePadding(date.getMonth() + 1)
  const year = date.getFullYear()
  return `${day}.${month}.${year}`
}
