// Problem domain: https://www.codewars.com/kata/closures-and-scopes/javascript

// It's a trap!

function createFunctions(n) {
  let callbacks = [];

  for(let i = 0; i < n; i++) {
    callbacks.push(() => i);
  }
  
  return callbacks;
}

/* Explanation */
// let allows you to declare variables that are limited in scope to the block, 
// statement, or expression on which it is used. This is unlike the var keyword, 
// which defines a variable globally, or locally to an entire function regardless 
// of block scope. An explanation of why the name "let" was chosen can be found here.