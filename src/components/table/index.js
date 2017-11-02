'use strict'

import React from 'react'
import { PortalWithState } from 'react-portal'
import { ToastContainer } from 'react-toastr'
import toast from 'utils/toast'
import PropTypes from 'prop-types'

import '../../css/toast.sass'

let container

const handleAction = (func1, func2) => () => {
  func1()
  func2()
  toast(container, 'Deleted Successfully!!')
}

const ExcludeButton = ({ action }) => (
  <PortalWithState closeOnOutsideClick closeOnEsc>
    {({ openPortal, closePortal, isOpen, portal }) => [
      <button key='foo' className='btn -table' onClick={openPortal}>
        X
      </button>,
      portal(
        <div className='modal'>
          <div className='card -modal animated zoomIn'>
            <div className='header -exclude'>
              <h2>Exclude Order</h2>
            </div>
            <div className='content'>
              <p className='sure'>Are you sure about that?</p>
              <button className='btn -left' onClick={handleAction(closePortal, action)}>Yes</button>
              <button className='btn -right' onClick={closePortal}>No</button>
            </div>
          </div>
        </div>
       )
    ]}
  </PortalWithState>
)

const EditButton = ({ action }) => (
  <PortalWithState closeOnOutsideClick closeOnEsc>
    {({ openPortal, closePortal, isOpen, portal }) => [
      <button key='foo' className='btn -table' onClick={openPortal}>
        E
      </button>,
      portal(
        <div className='modal'>
          {action(closePortal, container)}
        </div>
       )
    ]}
  </PortalWithState>
)

const Table = ({ orders, noResults, handleRemove, handleEdit }) => (
  <div className='card'>
    <ToastContainer
      ref={ref => { container = ref }}
      className='toast-top-right'
    />
    <div className='table-content'>
      <table className='table'>
        <thead>
          <tr>
            <td>User</td>
            <td>Product</td>
            <td>Date</td>
            <td>Price</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody id='tabela'>
          {Object.keys(orders).map((orderId) => {
            if (!orders[orderId].user) return null

            return (
              <tr key={orderId}>
                <td>{orders[orderId].user}</td>
                <td>{orders[orderId].product}</td>
                <td>{orders[orderId].date}</td>
                <td>{orders[orderId].price}</td>
                <td>
                  <ExcludeButton action={() => handleRemove(orderId)} />
                  <EditButton action={handleEdit(orderId)} />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
    {noResults
      ? <div className='notfound'>Nothing was found</div>
      : null
    }
  </div>
)

ExcludeButton.propTypes = {
  action: PropTypes.func.isRequired
}

EditButton.propTypes = {
  action: PropTypes.func.isRequired
}

Table.propTypes = {
  orders: PropTypes.object.isRequired,
  noReults: PropTypes.bool,
  handleRemove: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired
}

export default Table
