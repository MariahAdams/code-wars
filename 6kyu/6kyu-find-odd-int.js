// Problem domain: https://www.codewars.com/kata/54da5a58ea159efa38000836/solutions/javascript

// Given an array, find the int that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

function findOdd(a) {
  let count = {};
  a.sort().forEach(x => count[x] ? count[x]++ : count[x] = 1);

  return parseInt(Object.keys(count).find(x => count[x] % 2));
}

// better way?