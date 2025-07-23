import _ from 'lodash';

export function add(num1: number, num2: number): number{
    return _.add(num1, num2);
}

export function subtract(num1: number, num2: number): number{
    return _.subtract(num1, num2);
}

export function multiply(num1: number, num2: number): number{
    return _.multiply(num1, num2);
}

export function divide(num1: number, num2: number): number{
    if (_.isEqual(num2, 0)) {
    throw new Error("Division by zero is not allowed");
  }
    return _.divide(num1, num2);
}