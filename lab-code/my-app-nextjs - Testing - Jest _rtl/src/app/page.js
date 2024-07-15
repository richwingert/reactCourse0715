// To inform next js, this is a client component 
"use client";

import React, { useState } from 'react';

import 'semantic-ui-css/semantic.min.css'

function App () {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState('');

  //This is global to pass simulate state to the functions for RTL
  var globalItem = '';
  var globalItems = [];

  const onItemChange = (e) => {
    globalItem = e.target.value;
    setItem( e.target.value );
  };

  const addItem = (e) => {
    e.preventDefault();

    //global variable to simulate state for RTL
    globalItems.concat(item);

    setItems( items.concat(item) );
    setItem( '' );
  };
  
    const submitDisabled = !item;
    return(
      <div
        className='ui text container'
        id='app'
      >
        <table className='ui selectable structured large table'>
          <thead>
            <tr>
              <th>Items</th>
            </tr>
          </thead>
          <tbody>
            {
              items.map((item, idx) => (
                <tr
                  key={idx}
                >
                  <td>{item}</td>
                </tr>
              ))
            }
          </tbody>
          <tfoot>
            <tr>
              <th>
                <form data-testid="custom-form"
                  className='ui form'
                  onSubmit={addItem}
                >
                <div className='field'>
                  <input
                    className='prompt'
                    type='text'
                    placeholder='Add item...'
                    value={item}
                    onChange={onItemChange}
                  />
                </div>
                <button
                  className='ui button'
                  type='submit'
                  disabled={submitDisabled}
                >
                  Add item
                </button>
                </form>
              </th>
            </tr>
          </tfoot>
        </table>
      </div>
    )
}


export default App;
