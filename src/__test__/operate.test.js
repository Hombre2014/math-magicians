import operate from '../logic/operate';

describe('Check for the 4 operation +, -, ÷ and x', () => {
  test('For adding two numbers', () => {
    expect(operate(1, 2, '+')).toEqual('3');
  });

  test('For subtracting two numbers', () => {
    expect(operate(4, 3, '-')).toEqual('1');
  });

  test('For Multiplication two numbers', () => {
    expect(operate(4, 3, 'x')).toEqual('12');
  });

  test('For Division two numbers', () => {
    expect(operate(4, 2, '÷')).toEqual('2');
  });

  test('For percentage operation', () => {
    expect(operate(10, 6, '%')).toEqual('4');
  });

  test('For division by 0 operation', () => {
    expect(operate(5, 0, '÷')).toEqual("Can't divide by 0.");
  });
});
