import React from 'react';
import { render, fireEvent, screen} from '@testing-library/react';
import App from './App';

describe('Calculator', () => {
  it('calculator dev element is rendered', () => {
    const { getByTestId } = render(<App />);
    const calculator = getByTestId('calculator');
    expect(calculator).toBeInTheDocument();
  });

  test('displays input on screen when button is clicked', () => {
    const { getByTestId } = render(<App />);
    const calculator = getByTestId('calculator');
    const display = calculator.querySelector('.display');
    const button = calculator.querySelector('button[value="0"]');
    fireEvent.click(button);
    expect(display).toHaveTextContent('0');
  });

  test('updates display on button and operator click', () => {
    const { getByTestId } = render(<App />);
    const calculator = getByTestId('calculator');
    const display = calculator.querySelector('.display');
    const digitButton = calculator.querySelector('button[value="5"]');
    const operatorButton = calculator.querySelector('button[value="+"]');
    fireEvent.click(digitButton);
    fireEvent.click(operatorButton);
    expect(display).toHaveTextContent('5+');
  });

  test('addition operation', () => {
    const { getByTestId } = render(<App />);
    const calculator = getByTestId('calculator');
    const display = calculator.querySelector('.display');
    const digit1 = calculator.querySelector('button[value="9"]');
    const digit2 = calculator.querySelector('button[value="4"]');
    const operatorButton = calculator.querySelector('button[value="+"]');
    const equals = calculator.querySelector('button[value="="]');
    fireEvent.click(digit1);
    fireEvent.click(operatorButton);
    fireEvent.click(digit2);
    fireEvent.click(equals); //9+4=
    expect(display).toHaveTextContent('13');
  });

  test('subtraction operation', () => {
    const { getByTestId } = render(<App />);
    const calculator = getByTestId('calculator');
    const display = calculator.querySelector('.display');
    const digit1 = calculator.querySelector('button[value="9"]');
    const digit2 = calculator.querySelector('button[value="4"]');
    const operator = calculator.querySelector('button[value="-"]');
    const equals = calculator.querySelector('button[value="="]');
    fireEvent.click(digit1);
    fireEvent.click(operator);
    fireEvent.click(digit2);
    fireEvent.click(equals); // 9-4=
    expect(display).toHaveTextContent('5');
  });

  test('double subtraction without brackets', () => {
    const { getByTestId } = render(<App />);
    const calculator = getByTestId('calculator');
    const display = calculator.querySelector('.display');
    const digit1 = calculator.querySelector('button[value="9"]');
    const digit2 = calculator.querySelector('button[value="4"]');
    const operator = calculator.querySelector('button[value="-"]');
    const equals = calculator.querySelector('button[value="="]');
    fireEvent.click(digit1); //9
    fireEvent.click(operator); //9-
    fireEvent.click(operator); //9--
    fireEvent.click(digit2); // 9--4
    fireEvent.click(equals); // 9--4=
    expect(display).toHaveTextContent('Error');
  });

  test('double subtraction with brackets', () => {
    const { getByTestId } = render(<App />);
    const calculator = getByTestId('calculator');
    const display = calculator.querySelector('.display');
    const digit1 = calculator.querySelector('button[value="9"]');
    const digit2 = calculator.querySelector('button[value="4"]');
    const operator = calculator.querySelector('button[value="-"]');
    const equals = calculator.querySelector('button[value="="]');
    const left_brac = calculator.querySelector('button[value="("]');
    const right_brac = calculator.querySelector('button[value=")"]');
    fireEvent.click(digit1);
    fireEvent.click(operator);
    fireEvent.click(left_brac);
    fireEvent.click(operator);
    fireEvent.click(digit2);
    fireEvent.click(right_brac);
    fireEvent.click(equals); // 9-(-4)=
    expect(display).toHaveTextContent('13');
  });
  
  
  test('clears display when AC is pressed', () => {
    const { getByTestId } = render(<App />);
    const calculator = getByTestId('calculator');
    const display = calculator.querySelector('.display');
    const ac = calculator.querySelector('button[value="AC"]');
    fireEvent.click(ac);
    expect(display).toHaveTextContent('');
  });

  test('deletes last digit when Del is pressed', () => {
    const { getByTestId } = render(<App />);
    const calculator = getByTestId('calculator');
    const display = calculator.querySelector('.display');
    const digit1 = calculator.querySelector('button[value="1"]');
    const digit2 = calculator.querySelector('button[value="2"]');
    const digit3 = calculator.querySelector('button[value="3"]');
    const del = calculator.querySelector('button[value="del"]');

    fireEvent.click(digit1);
    fireEvent.click(digit2);
    fireEvent.click(digit3); //123
    fireEvent.click(del); // expected: 12
    expect(display).toHaveTextContent('12');
  });

  //factorial
  test('factorial normal functionality', () => {
    const { getByTestId } = render(<App />);
    const calculator = getByTestId('calculator');
    const display = calculator.querySelector('.display');
    const digit1 = calculator.querySelector('button[value="5"]');
    const operatorButton = calculator.querySelector('button[value="!"]');
    fireEvent.click(digit1); //5
    fireEvent.click(operatorButton); //5!
    expect(display).toHaveTextContent('120');
  });

  test('factorial negative number : edge case 1', () => {
    const { getByTestId } = render(<App />);
    const calculator = getByTestId('calculator');
    const display = calculator.querySelector('.display');
    const minus = calculator.querySelector('button[value="-"]');
    const digit1 = calculator.querySelector('button[value="3"]');
    const operatorButton = calculator.querySelector('button[value="!"]');
    fireEvent.click(minus);
    fireEvent.click(digit1); //-3
    fireEvent.click(operatorButton); //-3
    expect(display).toHaveTextContent('Error');
  });

  test('factorial input = 0 : edge case 2', () => {
    const { getByTestId } = render(<App />);
    const calculator = getByTestId('calculator');
    const display = calculator.querySelector('.display');
    const digit1 = calculator.querySelector('button[value="0"]');
    const operatorButton = calculator.querySelector('button[value="!"]');
    fireEvent.click(digit1); //0
    fireEvent.click(operatorButton); //0!
    expect(display).toHaveTextContent('1');
  });

test('factorial : large number 50! : edge case 3', () => {
  const { getByTestId } = render(<App />);
  const calculator = getByTestId('calculator');
  const display = calculator.querySelector('.display');
  const digit1 = calculator.querySelector('button[value="5"]');
  const digit2 = calculator.querySelector('button[value="0"]');
  const operatorButton = calculator.querySelector('button[value="!"]');
  fireEvent.click(digit1); //50
  fireEvent.click(digit2);
  fireEvent.click(operatorButton); //50!
  expect(display).toHaveTextContent('3.0414093201713376e+64');
});

//ln
test('log 10 base e', () => {
  const { getByTestId } = render(<App />);
  const calculator = getByTestId('calculator');
  const display = calculator.querySelector('.display');
  const operator = calculator.querySelector('button[value="Math.log("]');
  const digit1 = calculator.querySelector('button[value="1"]');
  const digit2 = calculator.querySelector('button[value="0"]');
  const right_brac = calculator.querySelector('button[value=")"]');
  const equals = calculator.querySelector('button[value="="]'); 
  
  fireEvent.click(operator);
  fireEvent.click(digit1);
  fireEvent.click(digit2);
  fireEvent.click(right_brac);
  fireEvent.click(equals); //Math.log(10)=
  expect(display).toHaveTextContent('2.302585092994046');
});

test('log 0 base e', () => {
  const { getByTestId } = render(<App />);
  const calculator = getByTestId('calculator');
  const display = calculator.querySelector('.display');
  const operator = calculator.querySelector('button[value="Math.log("]');
  const digit1 = calculator.querySelector('button[value="0"]');
  const right_brac = calculator.querySelector('button[value=")"]');
  const equals = calculator.querySelector('button[value="="]'); 
  
  fireEvent.click(operator);
  fireEvent.click(digit1);
  fireEvent.click(right_brac);
  fireEvent.click(equals); //Math.log(0)=
  expect(display).toHaveTextContent('-Infinity');
});

test('log 1 base e', () => {
  const { getByTestId } = render(<App />);
  const calculator = getByTestId('calculator');
  const display = calculator.querySelector('.display');
  const operator = calculator.querySelector('button[value="Math.log("]');
  const digit1 = calculator.querySelector('button[value="1"]');
  const right_brac = calculator.querySelector('button[value=")"]');
  const equals = calculator.querySelector('button[value="="]'); 
  
  fireEvent.click(operator);
  fireEvent.click(digit1);
  fireEvent.click(right_brac);
  fireEvent.click(equals); //Math.log(1)=
  expect(display).toHaveTextContent('0');
});

test('log base e of a negative number', () => {
  const { getByTestId } = render(<App />);
  const calculator = getByTestId('calculator');
  const display = calculator.querySelector('.display');
  const operator = calculator.querySelector('button[value="Math.log("]');
  const minus = calculator.querySelector('button[value="-"]');
  const digit1 = calculator.querySelector('button[value="3"]');
  const right_brac = calculator.querySelector('button[value=")"]');
  const equals = calculator.querySelector('button[value="="]'); 
  
  fireEvent.click(operator);
  fireEvent.click(minus);
  fireEvent.click(digit1);
  fireEvent.click(right_brac);
  fireEvent.click(equals); //Math.log(-3)=
  expect(display).toHaveTextContent('NaN');
});

//sqrt
test('sqrt functionality', () => {
  const { getByTestId } = render(<App />);
  const calculator = getByTestId('calculator');
  const display = calculator.querySelector('.display');
  const operator = calculator.querySelector('button[value="Math.sqrt("]');
  const digit1 = calculator.querySelector('button[value="2"]');
  const digit2 = calculator.querySelector('button[value="5"]');
  const right_brac = calculator.querySelector('button[value=")"]');
  const equals = calculator.querySelector('button[value="="]'); 
  
  fireEvent.click(operator);
  fireEvent.click(digit1);
  fireEvent.click(digit2);
  fireEvent.click(right_brac);
  fireEvent.click(equals); //Math.sqrt(5)=
  expect(display).toHaveTextContent('5');
});

test('sqrt edge case : negative number', () => {
  const { getByTestId } = render(<App />);
  const calculator = getByTestId('calculator');
  const display = calculator.querySelector('.display');
  const operator = calculator.querySelector('button[value="Math.sqrt("]');
  const minus = calculator.querySelector('button[value="-"]');
  const digit1 = calculator.querySelector('button[value="3"]');
  const right_brac = calculator.querySelector('button[value=")"]');
  const equals = calculator.querySelector('button[value="="]'); 
  
  fireEvent.click(operator);
  fireEvent.click(minus);
  fireEvent.click(digit1);
  fireEvent.click(right_brac);
  fireEvent.click(equals); //Math.sqrt(-3)=
  expect(display).toHaveTextContent('NaN');
});

//pow
test('pow functionality', () => {
  const { getByTestId } = render(<App />);
  const calculator = getByTestId('calculator');
  const display = calculator.querySelector('.display');
  const digit1 = calculator.querySelector('button[value="2"]');
  const operator = calculator.querySelector('button[value="**"]');
  const digit2 = calculator.querySelector('button[value="5"]');
  const equals = calculator.querySelector('button[value="="]'); 
  
  fireEvent.click(digit1);
  fireEvent.click(operator);
  fireEvent.click(digit2);
  fireEvent.click(equals); //2**5
  expect(display).toHaveTextContent('32');
});

test('pow edge case: 5**0', () => {
  const { getByTestId } = render(<App />);
  const calculator = getByTestId('calculator');
  const display = calculator.querySelector('.display');
  const digit1 = calculator.querySelector('button[value="5"]');
  const operator = calculator.querySelector('button[value="**"]');
  const digit2 = calculator.querySelector('button[value="0"]');
  const equals = calculator.querySelector('button[value="="]'); 
  
  fireEvent.click(digit1);
  fireEvent.click(operator);
  fireEvent.click(digit2);
  fireEvent.click(equals); //5**0
  expect(display).toHaveTextContent('1');
});

test('pow edge case: 5**-2 (negative exponent)', () => {
  const { getByTestId } = render(<App />);
  const calculator = getByTestId('calculator');
  const display = calculator.querySelector('.display');
  const digit1 = calculator.querySelector('button[value="5"]');
  const operator = calculator.querySelector('button[value="**"]');
  const minus = calculator.querySelector('button[value="-"]');
  const digit2 = calculator.querySelector('button[value="2"]');
  const equals = calculator.querySelector('button[value="="]'); 
  
  fireEvent.click(digit1);
  fireEvent.click(operator);
  fireEvent.click(minus);
  fireEvent.click(digit2);
  fireEvent.click(equals); //5**-2
  expect(display).toHaveTextContent('0.04');
});

test('pow edge case: -5**2, without brackets', () => {
  const { getByTestId } = render(<App />);
  const calculator = getByTestId('calculator');
  const display = calculator.querySelector('.display');
  const digit1 = calculator.querySelector('button[value="5"]');
  const operator = calculator.querySelector('button[value="**"]');
  const minus = calculator.querySelector('button[value="-"]');
  const digit2 = calculator.querySelector('button[value="2"]');
  const equals = calculator.querySelector('button[value="="]'); 
  
  fireEvent.click(minus);
  fireEvent.click(digit1);
  fireEvent.click(operator);
  fireEvent.click(digit2);
  fireEvent.click(equals); //-5**2
  expect(display).toHaveTextContent('Error');
});

test('pow (-5)**2 test', () => {
  const { getByTestId } = render(<App />);
  const calculator = getByTestId('calculator');
  const display = calculator.querySelector('.display');
  const digit1 = calculator.querySelector('button[value="5"]');
  const digit2 = calculator.querySelector('button[value="2"]');
  const operator = calculator.querySelector('button[value="**"]');
  const minus = calculator.querySelector('button[value="-"]');
  const equals = calculator.querySelector('button[value="="]');
  const left_brac = calculator.querySelector('button[value="("]');
  const right_brac = calculator.querySelector('button[value=")"]');
  
  fireEvent.click(left_brac);
  fireEvent.click(minus);
  fireEvent.click(digit1);
  fireEvent.click(right_brac);
  fireEvent.click(operator);
  fireEvent.click(digit2);
  fireEvent.click(equals); // (-5)**2=
  expect(display).toHaveTextContent('25');
});



});
