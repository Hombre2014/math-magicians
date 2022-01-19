import React from 'react';
import {
  render, screen, fireEvent,
} from '@testing-library/react';
import Calculator from '../components/Calculator';

describe('Test calculate function', () => {
  it('Checking for complete operation', () => {
    render(<Calculator />);
    const one = screen.getByText('1');
    const sum = screen.getByText('+');
    const two = screen.getByText('2');
    const equals = screen.getByText('=');
    const display = screen.getByTestId('display');
    fireEvent.click(one);
    fireEvent.click(sum);
    fireEvent.click(two);
    fireEvent.click(equals);
    expect(display.innerHTML).toBe('3');
  });

  it('Checking for complete operation', () => {
    render(<Calculator />);
    const three = screen.getByText('3');
    const sub = screen.getByText('-');
    const six = screen.getByText('6');
    const equals = screen.getByText('=');
    const display = screen.getByTestId('display');
    fireEvent.click(three);
    fireEvent.click(sub);
    fireEvent.click(six);
    fireEvent.click(equals);
    expect(display.innerHTML).toBe('-3');
  });

});
