import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('Calculator', () => {
  it('updates display on digit button click', () => {
    const { getByTestId } = render(<App />);
    const calculator = getByTestId('calculator');
    expect(calculator).toBeInTheDocument();
  });

  test('displays input on screen when button is clicked', () => {
    const { getByTestId } = render(<App />);
    const calculator = getByTestId('calculator');
    const screen = calculator.querySelector('.display');
    const button = calculator.querySelector('button[value="5"]');
    fireEvent.click(button);
    expect(screen).toHaveTextContent('5');
  });

});
