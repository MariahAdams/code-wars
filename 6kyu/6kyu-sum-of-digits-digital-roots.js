// Problem domain: https://www.codewars.com/kata/sum-of-digits-slash-digital-root/javascript

// In this kata, you must create a digital root function.
// A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has two digits, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.

function digital_root(n) {
  let sum;

  function root(n) {
    sum = n.toString().split('').map(Number);
    if(sum.length === 1) return;
    return root(sum.reduce((a, b) => a + b, 0));
  }
  root(n);

  return sum[0];
}