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

    describe('and then clears the input', () => {
      beforeEach(() => {
        fireEvent.change(screen.getByRole('textbox'), {target: { value: '' } });

      });

      test('should disable `button`', () => {
        const buttonElement = screen.getByRole('button');
    
        expect(buttonElement).toBeDisabled();
      });
    });

    describe('and then submits the form', () => {
      beforeEach(() => {
        fireEvent.submit(screen.getByTestId('custom-form'));
      });


      test('should render the item in the table', () => {
        const rowElement = screen.getByRole('cell');
    
        expect(rowElement).toHaveTextContent(item1);
      });

      test('should clear the input field', () => {
        const inputElement = screen.getByRole('textbox');

        expect(inputElement).toHaveValue('');
      });

      test('should disable `button`', () => {
        const buttonElement = screen.getByRole('button');
    
        expect(buttonElement).toBeDisabled();
      }); 
    });
  }); 
});
