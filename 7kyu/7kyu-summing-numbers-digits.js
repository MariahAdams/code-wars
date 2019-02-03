// Problem domain: https://www.codewars.com/kata/52f3149496de55aded000410

// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

const sumDigits = n => Array.from(Math.abs(n).toString()).map(Number).reduce((a, v) => a + v, 0);