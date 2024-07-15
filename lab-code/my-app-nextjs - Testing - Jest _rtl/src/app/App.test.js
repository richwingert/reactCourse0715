/* leave first line blank for cq */

import App from './page';
//import React from 'react';  //no longer needed to reference


import {fireEvent, render, screen } from '@testing-library/react'
import { toBeInTheDocument, toHaveTextContent, toBeDisabled} from '@testing-library/jest-dom'

describe('App', () => {
  // let wrapper;

  beforeEach(() => {
    render(<App /> );
  });

  it('should have the `th` "Items"', () => {
    //render(<App />);
    const headerElement = 
      screen.getByText('Items');
      expect(headerElement).toBeInTheDocument() ;
  });

  it('should have a `button` element', () => {
    
      const btnElement = screen.getByRole('button');
      expect(btnElement).toHaveTextContent('Add item');
          
  });

  it('should have an `input` element', () => {
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();
  });

  it('`button` should be disabled', () => {
    const buttonElement = screen.getByRole('button');
    
    expect(buttonElement).toBeDisabled();
  }); 

   describe('the user populates the input', () => {
    const item1 = 'Vancouver';

    beforeEach(() => {

      fireEvent.change(screen.getByRole('textbox'), {target: { value: item1 } });

      // input.simulate('change', {
      //   target: { value: item }
      // });
    });

    it('should update the state property `item`. Cannot really test with RTL', () => {
      const inputElement = screen.getByRole('textbox');
      // CHECK THE VALUE OF "GLOBALITEM" SINCE SHOULD BE THE SAME AS STATE
      expect(inputElement).toHaveValue('Vancouver');
    });

    it('should enable `button`', () => {
      const buttonElement = screen.getByRole('button');
    
      expect(buttonElement).toBeEnabled();
    });

    describe('and then clears the input', () => {
      beforeEach(() => {
        fireEvent.change(screen.getByRole('textbox'), {target: { value: '' } });

      });

      it('should disable `button`', () => {
        const buttonElement = screen.getByRole('button');
    
        expect(buttonElement).toBeDisabled();
      });
    });

    describe('and then submits the form', () => {
      beforeEach(() => {
        fireEvent.submit(screen.getByTestId('custom-form'));
                
/*         const form = wrapper.find('form').first();
        form.simulate('submit', {
          preventDefault: () => {},
        }); */
      });

      //******************************************************* */
  /*     it('should add the item to state', () => {
        const rowElement = screen.getByRole('cell');
    
        expect(rowElement).toHaveTextContent(item1);
      }); */
      //****************************************************** */

      it('should render the item in the table', () => {
        const rowElement = screen.getByRole('cell');
    
        expect(rowElement).toHaveTextContent(item1);
      });

      it('should clear the input field', () => {
        const inputElement = screen.getByRole('textbox');

        expect(inputElement).toHaveValue('');
      });

      it('should disable `button`', () => {
        const buttonElement = screen.getByRole('button');
    
        expect(buttonElement).toBeDisabled();
      }); 
    });
  }); 
});
