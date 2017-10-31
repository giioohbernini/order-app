'use strict'

import React from 'react'

const NewOrder = ({ users, products, handleSubmit, editId = false }) => {
  return (
    <div className='card'>
      <div className='header'>
        <h2>Add new order</h2>
      </div>
      <div className='content'>
        <form onSubmit={handleSubmit(editId)}>
          <div className='item'>
            <label className='label'>User:</label>
            <select name='user' className='input -select'>
              {users.map((user, index) => (
                <option key={index} value={user}>{user}</option>
              ))}
            </select>
          </div>
          <div className='item'>
            <label className='label'>Product:</label>
            <select name='product' className='input -select'>
              {products.map((product, index) => (
                <option key={index} value={product}>{product}</option>
              ))}
            </select>
          </div>
          <div className='item'>
            <label className='label'>Price:</label>
            <input name='price' type='text' className='input' />
          </div>
          <div className='item'>
            <input type='submit' className='btn' value='Save' />
          </div>
        </form>
      </div>
    </div>
  )
}

export default NewOrder
