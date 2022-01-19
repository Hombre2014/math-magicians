import calculate from '../logic/calculate';

describe('Testing user interactions', () => {
  test('When user press 1, the next should have value of 1', () => {
    const userPress = { total: null, next: null, operation: null };
    expect(calculate(userPress, '1')).toEqual({ next: '1', total: null });
  });

  test('Test the operation multiply with number 5, when the total is 4 should equals 20', () => {
    const testOperation = { total: '4', next: '5', operation: 'x' };
    expect(calculate(testOperation, '=')).toEqual({ total: '20', next: null, operation: null });
  });
});
