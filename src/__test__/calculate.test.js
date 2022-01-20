import React from 'react';
import {
  render, screen, fireEvent,
} from '@testing-library/react';
import Calculator from '../components/Calculator';
import calculate from '../logic/calculate';

describe('Test calculate function', () => {
  const obj = {
    total: null,
    next: null,
    operation: null,
  };
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

  it('Testing that Calculator renders correctly', async () => {
    const { asFragment } = render(<Calculator />);
    expect(asFragment()).toMatchSnapshot();
  });

  obj.next = '1';
  test('Pressing button +/- and next is 1 it will returns -1', () => {
    expect(calculate(obj, '+/-')).toEqual({
      total: null,
      next: '-1',
      operation: null,
    });
  });

  test('When next is 5 and press the . button, it will returns 5.', () => {
    const testOperation = { total: null, next: '5', operation: '.' };
    expect(calculate(testOperation, '.')).toEqual({ total: null, next: '5.', operation: '.' });
  });

  test('User pressed an operation + after pressing = button', () => {
    const testOperation = { total: '10', next: null, operation: '+' };
    expect(calculate(testOperation, '+')).toEqual({ total: '10', next: null, operation: '+' });
  });

  test('User pressed an operation + button and there is an existing operation x', () => {
    const testOperation = { total: '10', next: null, operation: 'x' };
    expect(calculate(testOperation, '+')).toEqual({ total: '10', next: null, operation: '+' });
  });
});
