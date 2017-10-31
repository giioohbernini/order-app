'use strict'

import React from 'react'

const Filter = ({ handleFilter, handleSearch }) => (
  <div className='card'>
    <div className='header'>
      <h2>Get orders from</h2>
    </div>
    <div className='content'>
      <div className='radio-list'>
        <div className='item' >
          <input type='radio' name='filter' value='today' id='f-option' onClick={handleFilter} />
          <label htmlFor='f-option' >Today</label>
        </div>
        <div className='item'>
          <input type='radio' name='filter' value='thisweek' id='s-option' onClick={handleFilter} />
          <label htmlFor='s-option'>This week</label>
        </div>
        <div className='item'>
          <input type='radio' name='filter' value='alltime' id='t-option' onClick={handleFilter} />
          <label htmlFor='t-option'>All time</label>
        </div>
      </div>
      <input className='input' type='text' placeholder='Search for names..' onChange={handleSearch} />
    </div>
  </div>
)

export default Filter
