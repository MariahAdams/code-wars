// Problem domain: https://www.codewars.com/kata/product-of-array-items/javascript

// Calculate the product of all elements in an array.
// If the array is null or is empty, the function should return null.

const product = v => !v || !v.length ? null : v.reduce((a, b) => a * b);