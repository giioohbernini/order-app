'use strict'

const handleSearch = (value, orders) => {
  let filteredOrders = {}
  let noResults = true
  const re = new RegExp('^' + value, 'i')

  Object.keys(orders).map((orderId) => {
    if (orders[orderId].user.match(re)) {
      filteredOrders = {
        ...filteredOrders,
        [orderId]: orders[orderId]
      }
      noResults = false
    }
  })

  return ({
    filteredOrders,
    noResults
  })
}

export default handleSearch
