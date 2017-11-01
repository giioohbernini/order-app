'use strict'

import moment from 'moment'

const filterOrder = (type, orders) => {
  let filteredOrders = {}
  let noResults = false
  const td = new Date()
  const date = `${td.getFullYear()}-${td.getMonth() + 1}-${td.getDate()}`

  Object.keys(orders).map((orderId) => {
    if (type === 'today') {
      if (orders[orderId].date === date) {
        filteredOrders = {
          ...filteredOrders,
          [orderId]: orders[orderId]
        }
        noResults = false
      } else {
        noResults = true
      }
    } else if (type === 'thisweek') {
      const start = moment(date).startOf('week').format('YYYY-MM-DD')
      const end = moment(date).endOf('week').format('YYYY-MM-DD')

      if (moment(orders[orderId].date).isSameOrBefore(end) && moment(orders[orderId].date).isSameOrAfter(start)) {
        filteredOrders = {
          ...filteredOrders,
          [orderId]: orders[orderId]
        }

        noResults = false
      } else {
        noResults = true
      }
    } else {
      filteredOrders = orders
      noResults = false
    }
  })

  return ({
    filteredOrders,
    noResults
  })
}

export default filterOrder
