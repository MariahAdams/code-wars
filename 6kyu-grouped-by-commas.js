// Problem domain: https://www.codewars.com/kata/grouped-by-commas/train/javascript

// Finish the solution so that it takes an input n (integer) and returns a string that is the decimal representation of the number grouped by commas after every 3 digits.

// Assume: 0 <= n < 1000000000

const groupByCommas = n => n.toString().replace(/([0-9])(?=(?:[0-9]{3})+(?![0-9]))/g, '$1,');