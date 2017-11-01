'use strict'

const handleSubmit = (e, orders, editId) => {
  const td = new Date()
  const date = editId ? orders[editId].date : `${td.getFullYear()}-${td.getMonth() + 1}-${td.getDate()}`
  const array = Object.keys(orders)
  const key = editId || parseInt(array[array.length - 1]) + 1

  const orderList = {
    ...orders,
    [key]: {
      user: e.target.user.value,
      product: e.target.product.value,
      price: e.target.price.value,
      date
    }
  }

  return orderList
}

export default handleSubmit
