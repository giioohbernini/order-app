'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import { ToastContainer } from 'react-toastr'
import toast from 'utils/toast'

let container

const NewOrder = ({ users, products, handleSubmit, editId = false }) => {
  return (
    <div className='card'>
      <ToastContainer
        ref={ref => { container = ref }}
        className='toast-top-right'
      />
      <div className='header'>
        <h2>Add new order</h2>
      </div>
      <div className='content'>
        <form onSubmit={handleSubmit(editId, () => toast(container, 'New order added successfully'))}>
          <div className='item'>
            <label className='label'>User:</label>
            <select name='user' className='input -select' required>
              <option value=''>Select an user</option>
              {users.map((user, index) => (
                <option key={index} value={user}>{user}</option>
              ))}
            </select>
          </div>
          <div className='item'>
            <label className='label'>Product:</label>
            <select name='product' className='input -select' required>
              <option value=''>Select a product</option>
              {products.map((product, index) => (
                <option key={index} value={product}>{product}</option>
              ))}
            </select>
          </div>
          <div className='item'>
            <label className='label'>Price:</label>
            <input name='price' type='text' className='input' required />
          </div>
          <div className='item'>
            <input type='submit' className='btn' value='Save' />
          </div>
        </form>
      </div>
    </div>
  )
}

NewOrder.propTypes = {
  users: PropTypes.array.isRequired,
  products: PropTypes.array.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  editId: PropTypes.bool
}

export default NewOrder
