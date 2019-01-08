// Problem domain: https://www.codewars.com/kata/dashatize-it/javascript

// Given a number, return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark.

function dashatize(num) {
  let a = num.toString().replace(/([13579])/g, '-$1-');
  let b = a.replace(/--/g, '-');
  return c = b.replace(/^-|-$/g, '');
};

/* Refactored */