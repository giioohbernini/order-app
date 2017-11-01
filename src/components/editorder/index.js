'use strict'

import React, { Component } from 'react'

class EditOrder extends Component {
  constructor (props) {
    super(props)
    const { user, product, price } = this.props.order
    this.state = {
      user,
      product,
      price
    }

    this.handleUser = (e) => {
      this.setState({ user: e.target.value })
    }

    this.handleProduct = (e) => {
      this.setState({ product: e.target.value })
    }

    this.handlePrice = (e) => {
      this.setState({ price: e.target.value })
    }
  }
  render () {
    return (
      <div className='card -modal'>
        <div className='header'>
          <h2>Edit Order</h2>
          <button className='btn' onClick={this.props.closePortal}>X</button>
        </div>
        <div className='content'>
          <form onSubmit={this.props.handleSubmit}>
            <div className='item'>
              <label className='label'>User:</label>
              <select defaultValue={this.state.user} onChange={this.handleUser} name='user' className='input -select'>
                {this.props.users.map((user, index) => (
                  <option key={index} value={user}>{user}</option>
                ))}
              </select>
            </div>
            <div className='item'>
              <label className='label'>Product:</label>
              <select name='product' defaultValue={this.state.product} onChange={this.handleProduct} className='input -select'>
                {this.props.products.map((product, index) => (
                  <option key={index} value={product}>{product}</option>
                ))}
              </select>
            </div>
            <div className='item'>
              <label className='label'>Price:</label>
              <input name='price' type='text' value={this.state.price} onChange={this.handlePrice} className='input' />
            </div>
            <div className='item'>
              <input type='submit' className='btn' value='Save' />
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default EditOrder
