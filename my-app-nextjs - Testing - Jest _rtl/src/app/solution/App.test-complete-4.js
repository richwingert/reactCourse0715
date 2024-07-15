/* leave first line blank for cq */

import App from './page';
import React from 'react';

import {fireEvent, render, screen } from '@testing-library/react'
import { toBeInTheDocument, toHaveTextContent, toBeDisabled} from '@testing-library/jest-dom'

describe('App', () => {
  
  beforeEach(() => {
    render(<App /> );
  });

  test('should have the `th` "Items"', () => {
    //render(<App />);
    const headerElement = 
      screen.getByText('Items');
      expect(headerElement).toBeInTheDocument() ;
  });

  test('should have a `button` element', () => {
    
      const btnElement = screen.getByRole('button');
      expect(btnElement).toHaveTextContent('Add item');
          
  });

  test('should have an `input` element', () => {
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();
  });

  test('`button` should be disabled', () => {
    const buttonElement = screen.getByRole('button');
    
    expect(buttonElement).toBeDisabled();
  }); 

   describe('the user populates the input', () => {
    const item1 = 'Vancouver';

    beforeEach(() => {

      fireEvent.change(screen.getByRole('textbox'), {target: { value: item1 } });

    });

    test('should update the state property `item`. Cannot really test with RTL', () => {
      const inputElement = screen.getByRole('textbox');
      // CHECK THE VALUE OF "GLOBALITEM" SINCE SHOULD BE THE SAME AS STATE
      expect(inputElement).toHaveValue('Vancouver');
    });

    test('should enable `button`', () => {
      const buttonElement = screen.getByRole('button');
    
      expect(buttonElement).toBeEnabled();
    });
    
  }); 
});
