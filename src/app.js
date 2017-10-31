'use strict'

import React, { Component } from 'react'
import Filter from 'components/filter'
import NewOrder from 'components/neworder'
import EditOrder from 'components/editorder'
import Table from 'components/table'
import users from './utils/users.json'
import products from './utils/products.json'
import orders from './utils/orders.json'

import filterOrders from './utils/filter'
import filterByName from './utils/filter/handleSearch'

import './css/style.sass'

class App extends Component {
  constructor () {
    super()
    this.state = {
      users: users,
      products: products,
      orders: orders,
      filteredOrders: orders,
      noResults: false,
    }


    this.handleRemove = (id) => {
      const { [id]: remove, ...orders } = this.state.orders
      this.setState({
        orders,
        filteredOrders: orders
      })
    }

    this.handleEdit = (editId) => (closePortal) => {
      const order = this.state.orders[editId]
      return (
        <EditOrder
          editId={editId}
          closePortal={closePortal}
          handleInputEdit={this.handleInputEdit}
          handleSubmit={this.handleSubmit(editId)}
          order={order}
          products={this.state.products}
          updateInput={this.updateInput}
          users={this.state.users}
        />
      )
    }

    this.handleSubmit = (editId) => (e) => {
      e.preventDefault()
      const td = new Date()
      const date = `${td.getFullYear()}-${td.getMonth() + 1}-${td.getDate()}`
      const array = Object.keys(this.state.orders)
      const key = editId || parseInt(array[array.length - 1]) + 1

      const orders = {
        ...this.state.orders,
        [key]: {
          user: e.target.user.value,
          product: e.target.product.value,
          price: e.target.price.value,
          date
        }
      }

      this.setState({
        orders,
        filteredOrders: orders
      })
    }

    this.handleFilter = (e) => {
      const {filteredOrders, noResults} = filterOrders(e.target.value, this.state.orders)

      this.setState({
        filteredOrders,
        noResults
      })
    }

    this.handleSearch = (e) => {
      const {filteredOrders, noResults} = filterByName(e.target.value, this.state.orders)

      this.setState({
        filteredOrders,
        noResults
      })
    }
  }

  componentWillMount () {
  // this.handleFetchUsers()
  }

  render () {
    return (
      <section className='main'>
        <div className='card-content'>
          <NewOrder
            users={this.state.users}
            products={this.state.products}
            handleSubmit={this.handleSubmit}
          />
          <Filter
            handleFilter={this.handleFilter}
            handleSearch={this.handleSearch}
          />
          <Table
            orders={this.state.filteredOrders}
            noResults={this.state.noResults}
            handleRemove={this.handleRemove}
            handleEdit={this.handleEdit}
          />
        </div>
      </section>
    )
  }
}

export default App
