/* leave first line blank for cq */

import App from './page';
import React from 'react';

import {fireEvent, render, screen } from '@testing-library/react'
import { toBeInTheDocument, toHaveTextContent, toBeDisabled} from '@testing-library/jest-dom'

describe('App', () => {
  test('should have the `th` "Items"', () => {
    render(<App />);
    const headerElement = 
      screen.getByText('Items');
      expect(headerElement).toBeInTheDocument() ;
  });

  test('should have a `button` element', () => {
    render(<App />);
      const btnElement = screen.getByRole('button');
      expect(btnElement).toHaveTextContent('Add item');
          
  });

  test('should have an `input` element', () => {
    render(<App />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();
  });

  test('`button` should be disabled', () => {
    render(<App />);
    const buttonElement = screen.getByRole('button');
    
    expect(buttonElement).toBeDisabled();
  }); 

   
});
