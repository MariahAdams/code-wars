// Problem Domain: https://www.codewars.com/kata/sort-numbers/train/javascript

// Finish the solution so that it sorts the passed in array of numbers. 
// If the function passes in an empty array or null/nil value then it 
// should return an empty array.

const solution = nums => nums ? nums.sort((a,b) => a - b) : [];