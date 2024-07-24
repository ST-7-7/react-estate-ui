import React from 'react';
import "./Filter.scss";

function Filter() {
  return (
    <div className='filter'>
      <h1>Search results for <b>Adelaide</b></h1>
      <div className='top'>
        <div className='item'>
          <label htmlFor='city'>Location</label>
          <input type='text' id='city' name='city' placeholder='City Location' />
        </div>
      </div>

      <div className='bottom'>

        <div className='item'>
          <label htmlFor='type'>Type</label>
          <select id='type' name='type'>
            <option value='buy'>Buy</option>
            <option value='rent'>Rent</option>
          </select>
        </div>

        <div className='item'>
          <label htmlFor='property'>Property</label>
          <select id='property' name='property'>
            <option value='house'>House</option>
            <option value='apartment'>Apartment</option>
            <option value='unit'>Unit</option>
            <option value='townhouse'>Townhouse</option>
          </select>
        </div>

        <div className='item'>
          <label htmlFor='minPrice'>Min Price</label>
          <input type='text' id='minPrice' name='minPrice' placeholder='any' />
        </div>

        <div className='item'>
          <label htmlFor='maxPrice'>Max Price</label>
          <input type='text' id='maxPrice' name='maxPrice' placeholder='any' />
        </div>

        <div className='item'>
          <label htmlFor='bedroom'>Bedroom</label>
          <input type='text' id='bedroom' name='bedroom' placeholder='any' />
        </div>

        <button>
          <img src='search.png'/>
        </button>
      </div>


    </div>

  )
}

export default Filter