/* leave first line blank for cq */

import App from './page';
import React from 'react';

import {fireEvent, render, screen } from '@testing-library/react'
import { toBeInTheDocument, toHaveTextContent, toBeDisabled} from '@testing-library/jest-dom'

describe('App', () => {
  
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

  
});
