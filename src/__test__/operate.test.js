import operate from '../logic/operate';

describe('Check for the 4 operation +. -. / and *', () => {
  test('For adding two numbers', () => {
    expect(operate(1, 2, '+')).toEqual('3');
  });

  test('For subtracting two numbers', () => {
    expect(operate(4, 3, '-')).toEqual('1');
  });
});